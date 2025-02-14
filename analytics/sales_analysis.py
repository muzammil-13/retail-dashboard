import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

def analyze_customer_segments(sales_data):
    # Customer segmentation using K-means
    kmeans = KMeans(n_clusters=3)
    customer_segments = kmeans.fit_predict(sales_data[['total_spent', 'frequency']])
    return customer_segments
