#cs_tek #fun_topics 

Diffusion models are one of the most widely known generative deep learning models for image generation.
It learns to create realistic images from learned denoising processes.
Many different types of diffusion models have been made, ones which can generate an image based on a prompt or the one which can mix two images together with a certain art style, but right now the one model in my scope is the foundational unconditional denoising diffusion model.

## A rough idea on how a diffusion model works
- The diffusion process includes a forward noising and a reverse denoising process.
- We can take the forward process like adding noise to the image bit by bit until its totally static.
  ![my image](/blogs/ddpm_encoding.png)
- Then comes the reverse processing, which is the actual model which tries to remove the noise that the forward process has created and try to arrive at the original image, this way the model learns to remove the noise and come at a certain target
  ![my image](/blogs/ddpm_decoder.png)

## The algorithm and training objective
- Take a random sample data from our training dataset
- select a random timestep on our noise schedule
- add the noise from that timestep onto our data, simulating the forward diffusion process
- pass the noisy image into our model to predict the noise we're added
- compute the MSE between the predicted noise and the actual noise and optimize the model using the MSE loss
  ![my image](/blogs/ddpm_algorithm_1.png)

## Sampling algorithm 

if our model can successfully predict the amount of noise based on a timestep, the model can iteratively start from the noise and gradually remove the noise each time step to recover the original data.

- Generate random noise Z form a standard normal distribution
- for each timestep starting from our last timestep and moving backwards: 
  - update Z by estimating the reverse process distribution with mean parametrized by Z from the previous step and variance parametrized by the noise out model estimates at that timestep
  - Add a small amount of noise back for stability
  - repeat until we arrive at time step 0
  ![my image](/blogs/ddpm_algorithm_2.png)

## DDPM (Denoising Diffusion Probabilistic Model)
This is what we're sought on building right now
Where the model is trained by taking a sample, adding noise over several 1000 timesteps and the model learns to reverse the noising technique.
To generate a new image, a pure noise is taken and over the T timesteps, the noise is reduced to gradually turn it into a sample image.
This is the OG diffusion model

The original authors of DDPM used a UNET architecture which looks like the following
![my image](/blogs/ddpm_unet_architecture.png)

## Implementation and the results

Ive been implementing and training my model over a dataset I found on kaggle which had a lot of 16x16 pixel art sprites in it

find the implementation [here](https://www.kaggle.com/code/badmashboi/diffusion-model-pixel-art) 

The results came out pretty nice, the model has learned the basic pixel art style but currently does not have the ability to make something new out the window, we will implement that in our next model

![my image](/blogs/ddpm_result.png)

in the meantime, look at this dope training loop over a 100 epochs

![my image](/blogs/ddpm_result_timelapse.png)