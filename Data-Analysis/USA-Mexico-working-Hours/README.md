#Headline

First EDA project using the USA + Mexico hours dataset.The project covers basic EDA

Step 1: We import the csv file,we use head to see the first 5 rows


Step 2: We use shape to see what shape it is


Step 3: To check the missing values we use usa_hours.isna().sum()

Step 4:
To drop and replace the Time period we concat both datasets into one which is the name of combined,we are going to use : combined['Time period'] = combined['Time period'].fillna("Unknown") and combined = combined.dropna(subset=['Time period']). We use this so we can fill and replace all missing values with the string "Uknown".Then we overwrite duplicates with the master columns using : combined['Observation value'] = combined['OBS_VALUE'] combined['Observation status'] = combined['OBS_STATUS'] combined['Unit multiplier'] = combined['UNIT_MULT'],then final we are going to use combined['UNIT_MULT'] = combined['UNIT_MULT'].fillna(0) combined['Unit multiplier'] = combined['Unit multiplier'].fillna(0),to fill with zeros the missing values and also to make easier to clean the column using concat.

Step 5:
We use mexico_hours dataset,we import the csv file then we check the shape.After that we check the missing values and last we drop the missing columns and use : usa_hours[['UNIT_MULT', 'Unit multiplier']] = usa_hours[['UNIT_MULT', 'Unit multiplier']].fillna(0) mexico_hours[['UNIT_MULT', 'Unit multiplier']] = mexico_hours[['UNIT_MULT', 'Unit multiplier']].fillna(0) to fill the missing values with zero, here we do this with a more classical way of dividing the 2 datasets instead of concat.

Step 6:
We load again the cvs then we add a country name to each column,we do this so we can find easy both datasets.Next we aiready concat the datasets because we want to combine multiple datasets into one and also because we have almost the same datasets,we concat pieces of data together so we can analyze everything at once. To show all rows and columns from both datasets USA and Mexico we use pd.set_option('display.max_rows', None) and ('display.max_columns', None).

Step 7:
Our goal: to find missing values and get rid of them

Step 8: Before:

Step 9:
After:


