
🚢 Titanic Survival Prediction

📖 Overview

This project predicts passenger survival on the Titanic using supervised machine learning. It follows a complete end-to-end machine learning workflow, from data exploration and feature engineering to model comparison and evaluation.

---

🎯 Project Workflow

- Exploratory Data Analysis (EDA)
- Data Cleaning & Missing Value Handling
- Feature Engineering
  - Title
  - FamilySize
  - Has_Cabin
  - TicketGroupSize
- Data Preprocessing Pipeline
  - Median & Most Frequent Imputation
  - StandardScaler
  - One-Hot Encoding
  - ColumnTransformer
- Train/Test Split
- Model Training
  - Logistic Regression (Baseline)
  - Random Forest
- Hyperparameter Tuning (GridSearchCV)
- Feature Importance Analysis

---

📊 Model Performance

Model| Accuracy
Logistic Regression| 0.83
Random Forest| 0.77
Random Forest (GridSearchCV)| 0.78

Logistic Regression achieved the best performance on this dataset and was selected as the final model.

---

🛠 Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-Learn

---

📚 Machine Learning Concepts

- Exploratory Data Analysis (EDA)
- Feature Engineering
- Data Preprocessing
- Pipelines
- ColumnTransformer
- Logistic Regression
- Random Forest
- GridSearchCV
- Feature Importance
- Model Evaluation