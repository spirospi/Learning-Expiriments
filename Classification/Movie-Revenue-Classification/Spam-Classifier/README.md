
📧 Spam Email Classifier

📖 Overview

This project builds a spam email classifier using Natural Language Processing (NLP) and Machine Learning. Besides implementing the core workflow from the book, I extended the project with additional features and real-world experiments to better simulate how an email spam detection system could be used in practice.

---

🎯 Project Workflow

- Email preprocessing and text cleaning
- Word count transformation
- TF-IDF feature extraction
- Logistic Regression classifier
- Model evaluation
- Save and reload the trained model
- Predict unseen emails
- Test with real spam emails from the dataset
- Experiment with custom spam emails
- Adjust the decision threshold for prediction

---

💡 Real-World Extensions

In addition to the original implementation, I expanded the project by:

- Saving the trained model and TF-IDF vectorizer for future use.
- Loading the saved model and making predictions on completely new emails.
- Testing the classifier with a real spam email from the dataset.
- Creating and testing a long custom spam email that simulates a real phishing/spam message.
- Experimenting with a custom probability threshold instead of the default 0.50 to analyze how prediction sensitivity changes.

These additions helped transform the project from a learning exercise into a more practical machine learning application.

---

🛠 Technologies

- Python
- Pandas
- NumPy
- Scikit-Learn
- TF-IDF Vectorizer
- Logistic Regression
- Joblib

---

📚 Machine Learning Concepts

- Natural Language Processing (NLP)
- Text Cleaning
- TF-IDF Vectorization
- Logistic Regression
- Model Evaluation
- Model Persistence
- Inference on New Data
- Decision Threshold Tuning
- Real-World Testing