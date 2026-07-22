#!/usr/bin/env python3
"""
Utility Functions Module
Common utility functions for the application
"""


def greet(name):
    """
    Greet a person by name
    
    Args:
        name (str): The name of the person to greet
    
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}! Welcome to the TEST Repository."


def calculate_sum(numbers):
    """
    Calculate the sum of a list of numbers
    
    Args:
        numbers (list): List of numbers to sum
    
    Returns:
        int/float: The sum of all numbers
    """
    return sum(numbers)


def calculate_average(numbers):
    """
    Calculate the average of a list of numbers
    
    Args:
        numbers (list): List of numbers
    
    Returns:
        float: The average of all numbers
    """
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)


def format_currency(amount):
    """
    Format amount as currency
    
    Args:
        amount (float): The amount to format
    
    Returns:
        str: Formatted currency string
    """
    return f"${amount:.2f}"


def is_valid_email(email):
    """
    Validate email format
    
    Args:
        email (str): Email address to validate
    
    Returns:
        bool: True if email is valid, False otherwise
    """
    return "@" in email and "." in email.split("@")[1]
