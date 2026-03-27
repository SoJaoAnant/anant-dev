# Image Generation Lab  
### Exploring Deep Generative Models for Image Synthesis

---

## 🧠 Overview

**Image Generation Lab** is a deep learning project focused on building and experimenting with various generative models for image synthesis.  
The project explores how machines can learn the underlying distribution of image datasets and generate entirely new, realistic images.

It emphasizes understanding **latent space representations**, improving **training stability**, and comparing different generative approaches.

---

## ⚙️ Tech Stack

- **Python**
- **PyTorch**
- **TorchVision**
- **NumPy**
- **Matplotlib**

---

## 🚀 What It Does

The project trains models to generate images from learned data distributions.

Given a dataset (e.g., MNIST, CIFAR-10, etc.), the models:
- Learn patterns and structures within images  
- Encode them into latent representations  
- Generate new images that resemble the training data  

This enables the creation of synthetic images that are visually meaningful and diverse.

---

## 🔁 Models Explored

### 🔹 AutoEncoders (AE)
- Learn compressed representations of images  
- Consist of an **encoder** and **decoder**  
- Useful for reconstruction and latent space exploration  

---

### 🔹 Generative Adversarial Networks (GANs)
- Two networks: **Generator vs Discriminator**  
- Generator tries to create realistic images  
- Discriminator tries to distinguish real vs fake  

👉 Training is adversarial, leading to sharper outputs  

---

### 🔹 WGAN-GP (Wasserstein GAN with Gradient Penalty)
- Improves GAN stability  
- Uses Wasserstein distance instead of standard loss  
- Gradient penalty enforces smooth training  

👉 Reduces issues like **mode collapse** and unstable training  

---

### 🔹 Diffusion Models
- Generate images by **gradually removing noise**  
- Start from pure noise and iteratively refine  
- More stable than GANs and produce high-quality outputs  

👉 Represents the modern state-of-the-art in image generation  

---

## 🎯 Key Learnings

- **Latent space is powerful**  
  Small changes in latent vectors can produce meaningful variations in generated images  

- **Training stability is a major challenge**  
  Especially in GANs, where imbalance between generator and discriminator can break learning  

- **WGAN-GP improves convergence**  
  By providing smoother gradients and better optimization behavior  

- **Diffusion models are more stable but computationally expensive**  
  They trade speed for reliability and quality  

- **Visualization is essential**  
  Tools like Matplotlib help track progress, debug models, and understand outputs  

---

## 🏁 Conclusion

Image Generation Lab highlights the evolution of generative models — from reconstruction-based approaches like AutoEncoders to adversarial frameworks like GANs, and finally to modern diffusion-based methods.

The project demonstrates how deep learning models can not only understand visual data but also **create entirely new content from it**, opening doors to applications in art, simulation, and data augmentation.

---