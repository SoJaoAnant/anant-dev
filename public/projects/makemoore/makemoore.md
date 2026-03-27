# MakeMooreAI  
### RNN-based Character-Level Name Generator

---

## 🧠 Overview

**MakeMooreAI** is a deep learning project focused on generating human-like names using character-level sequence models.  
The model learns patterns from a dataset of names and generates new, realistic-sounding names by predicting one character at a time.

---

## ⚙️ Tech Stack

- **Python**
- **PyTorch**
- **NLTK**
- **spaCy**
- **Pandas**
- **NumPy**

---

## 🚀 What It Does

The model is trained on a dataset of real-world names.  
By learning the statistical structure and character patterns in these names, it can generate entirely new names that resemble the input data.

For example:
- Input Data: John, Alice, Robert, Emma
- Generated: Jomar, Alina, Roben, Emira


---

## 🧩 How It Works

The project uses **character-level modeling**, meaning:

- Each name is treated as a sequence of characters  
- The model predicts the **next character** given previous ones  
- Generation continues until a stopping condition (end token)

---

## 🔁 Models Used

Different types of Recurrent Neural Networks were explored:

- **RNN (Recurrent Neural Network)**  
  Basic sequential model that captures short-term dependencies  

- **LSTM (Long Short-Term Memory)**  
  Handles long-term dependencies and avoids vanishing gradients  

- **GRU (Gated Recurrent Unit)**  
  A simplified and efficient alternative to LSTM  

---

## 📊 Data Processing

- Tokenization of names into characters  
- Creation of input-output sequences  
- Padding and batching using **NumPy** and **Pandas**  
- Text preprocessing using **NLTK** and **spaCy**

---