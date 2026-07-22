#!/usr/bin/env python3
"""
Main Python Application
Sample module for testing purposes
"""

import json
import csv
from utils import greet, calculate_sum
from data_processor import process_data


def main():
    """Main application entry point"""
    print("=" * 50)
    print("Welcome to TEST Repository - Python Application")
    print("=" * 50)
    
    # Test greeting function
    message = greet("Developer")
    print(f"\n{message}")
    
    # Test calculation function
    numbers = [10, 20, 30, 40, 50]
    total = calculate_sum(numbers)
    print(f"\nSum of {numbers} = {total}")
    
    # Process sample data
    print("\nProcessing sample data...")
    sample_data = {
        "id": 1,
        "name": "Sample User",
        "email": "user@example.com",
        "status": "active"
    }
    result = process_data(sample_data)
    print(f"Processed Result: {result}")
    
    print("\n" + "=" * 50)
    print("Application completed successfully!")
    print("=" * 50)


if __name__ == "__main__":
    main()
