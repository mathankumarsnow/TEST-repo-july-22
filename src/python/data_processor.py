#!/usr/bin/env python3
"""
Data Processor Module
Handles data processing operations
"""

import json
from datetime import datetime


def process_data(data):
    """
    Process input data
    
    Args:
        data (dict): Input data to process
    
    Returns:
        dict: Processed data with metadata
    """
    processed = {
        "original": data,
        "processed_at": datetime.now().isoformat(),
        "record_count": len(data) if isinstance(data, dict) else 1,
        "status": "success"
    }
    return processed


def validate_user_data(user_data):
    """
    Validate user data structure
    
    Args:
        user_data (dict): User data to validate
    
    Returns:
        tuple: (is_valid, error_message)
    """
    required_fields = ["id", "name", "email"]
    
    for field in required_fields:
        if field not in user_data:
            return False, f"Missing required field: {field}"
    
    return True, "User data is valid"


def merge_datasets(dataset1, dataset2):
    """
    Merge two datasets
    
    Args:
        dataset1 (list): First dataset
        dataset2 (list): Second dataset
    
    Returns:
        list: Merged dataset
    """
    return dataset1 + dataset2
