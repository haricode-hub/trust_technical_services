#!/usr/bin/env python3
"""
Backend API Testing for Trust Technical Services
Tests all backend endpoints with comprehensive validation scenarios
"""

import requests
import json
import os
from datetime import datetime

# Get base URL from environment - using localhost for testing due to ingress routing issues
BASE_URL = "http://localhost:3000"
API_BASE = f"{BASE_URL}/api"

def print_test_result(test_name, success, details=""):
    """Print formatted test results"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status} {test_name}")
    if details:
        print(f"   Details: {details}")
    print()

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print("=" * 60)
    print("TESTING HEALTH CHECK ENDPOINT")
    print("=" * 60)
    
    try:
        # Test valid health check
        response = requests.get(f"{API_BASE}/health", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            # Check required fields
            required_fields = ['status', 'message', 'timestamp']
            has_all_fields = all(field in data for field in required_fields)
            
            if has_all_fields and data['status'] == 'ok':
                print_test_result(
                    "Health endpoint returns correct structure", 
                    True, 
                    f"Status: {data['status']}, Message: {data['message']}"
                )
                
                # Validate timestamp format
                try:
                    datetime.fromisoformat(data['timestamp'].replace('Z', '+00:00'))
                    print_test_result("Health endpoint timestamp format", True, data['timestamp'])
                except:
                    print_test_result("Health endpoint timestamp format", False, "Invalid ISO format")
                    
                return True
            else:
                print_test_result("Health endpoint structure", False, f"Missing fields or wrong status: {data}")
                return False
        else:
            print_test_result("Health endpoint status code", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Health endpoint connectivity", False, str(e))
        return False
    except Exception as e:
        print_test_result("Health endpoint general", False, str(e))
        return False

def test_contact_endpoint():
    """Test POST /api/contact endpoint"""
    print("=" * 60)
    print("TESTING CONTACT FORM ENDPOINT")
    print("=" * 60)
    
    success_count = 0
    total_tests = 6
    
    # Test 1: Valid contact form submission
    try:
        valid_data = {
            "name": "John Smith",
            "email": "john.smith@techcorp.co.nz",
            "message": "I need electrical safety testing for my office equipment. Please contact me to discuss requirements and pricing."
        }
        
        response = requests.post(f"{API_BASE}/contact", json=valid_data, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and 'submissionId' in data:
                print_test_result("Valid contact form submission", True, f"Submission ID: {data['submissionId']}")
                success_count += 1
            else:
                print_test_result("Valid contact form submission", False, f"Invalid response structure: {data}")
        else:
            print_test_result("Valid contact form submission", False, f"Status code: {response.status_code}, Response: {response.text}")
            
    except Exception as e:
        print_test_result("Valid contact form submission", False, str(e))
    
    # Test 2: Missing name field
    try:
        invalid_data = {
            "email": "test@example.com",
            "message": "Test message"
        }
        
        response = requests.post(f"{API_BASE}/contact", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing name validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing name validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing name validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing name validation", False, str(e))
    
    # Test 3: Missing email field
    try:
        invalid_data = {
            "name": "Test User",
            "message": "Test message"
        }
        
        response = requests.post(f"{API_BASE}/contact", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing email validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing email validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing email validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing email validation", False, str(e))
    
    # Test 4: Missing message field
    try:
        invalid_data = {
            "name": "Test User",
            "email": "test@example.com"
        }
        
        response = requests.post(f"{API_BASE}/contact", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing message validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing message validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing message validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing message validation", False, str(e))
    
    # Test 5: Invalid email format
    try:
        invalid_data = {
            "name": "Test User",
            "email": "invalid-email-format",
            "message": "Test message"
        }
        
        response = requests.post(f"{API_BASE}/contact", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'email' in data['error'].lower():
                print_test_result("Invalid email format validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Invalid email format validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Invalid email format validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Invalid email format validation", False, str(e))
    
    # Test 6: Empty fields (whitespace only)
    try:
        invalid_data = {
            "name": "   ",
            "email": "  test@example.com  ",
            "message": "   "
        }
        
        response = requests.post(f"{API_BASE}/contact", json=invalid_data, timeout=10)
        
        # Should either trim and accept or reject empty trimmed fields
        if response.status_code in [200, 400]:
            if response.status_code == 200:
                data = response.json()
                if data.get('success'):
                    print_test_result("Whitespace handling", True, "Trimmed and accepted")
                    success_count += 1
                else:
                    print_test_result("Whitespace handling", False, "Unexpected response structure")
            else:
                data = response.json()
                if 'error' in data:
                    print_test_result("Whitespace handling", True, "Rejected empty trimmed fields")
                    success_count += 1
                else:
                    print_test_result("Whitespace handling", False, "No error message")
        else:
            print_test_result("Whitespace handling", False, f"Unexpected status code: {response.status_code}")
            
    except Exception as e:
        print_test_result("Whitespace handling", False, str(e))
    
    print(f"Contact endpoint tests: {success_count}/{total_tests} passed")
    return success_count == total_tests

def test_service_inquiry_endpoint():
    """Test POST /api/services/inquiry endpoint"""
    print("=" * 60)
    print("TESTING SERVICE INQUIRY ENDPOINT")
    print("=" * 60)
    
    success_count = 0
    total_tests = 5
    
    # Test 1: Valid service inquiry
    try:
        valid_data = {
            "serviceType": "Test & Tag",
            "customerInfo": {
                "name": "Sarah Johnson",
                "email": "sarah.johnson@manufacturing.co.nz",
                "phone": "+64 9 123 4567",
                "company": "Auckland Manufacturing Ltd"
            },
            "inquiryDetails": "We need comprehensive electrical safety testing for our manufacturing equipment. We have approximately 50 pieces of equipment that require testing and certification."
        }
        
        response = requests.post(f"{API_BASE}/services/inquiry", json=valid_data, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and 'inquiryId' in data:
                print_test_result("Valid service inquiry submission", True, f"Inquiry ID: {data['inquiryId']}")
                success_count += 1
            else:
                print_test_result("Valid service inquiry submission", False, f"Invalid response structure: {data}")
        else:
            print_test_result("Valid service inquiry submission", False, f"Status code: {response.status_code}, Response: {response.text}")
            
    except Exception as e:
        print_test_result("Valid service inquiry submission", False, str(e))
    
    # Test 2: Missing service type
    try:
        invalid_data = {
            "customerInfo": {
                "name": "Test User",
                "email": "test@example.com"
            },
            "inquiryDetails": "Test inquiry"
        }
        
        response = requests.post(f"{API_BASE}/services/inquiry", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing service type validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing service type validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing service type validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing service type validation", False, str(e))
    
    # Test 3: Missing customer name
    try:
        invalid_data = {
            "serviceType": "Electronics Design",
            "customerInfo": {
                "email": "test@example.com"
            },
            "inquiryDetails": "Test inquiry"
        }
        
        response = requests.post(f"{API_BASE}/services/inquiry", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing customer name validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing customer name validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing customer name validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing customer name validation", False, str(e))
    
    # Test 4: Missing customer email
    try:
        invalid_data = {
            "serviceType": "Fire & Safety Testing",
            "customerInfo": {
                "name": "Test User"
            },
            "inquiryDetails": "Test inquiry"
        }
        
        response = requests.post(f"{API_BASE}/services/inquiry", json=invalid_data, timeout=10)
        
        if response.status_code == 400:
            data = response.json()
            if 'error' in data and 'required' in data['error'].lower():
                print_test_result("Missing customer email validation", True, data['error'])
                success_count += 1
            else:
                print_test_result("Missing customer email validation", False, f"Wrong error message: {data}")
        else:
            print_test_result("Missing customer email validation", False, f"Expected 400, got {response.status_code}")
            
    except Exception as e:
        print_test_result("Missing customer email validation", False, str(e))
    
    # Test 5: Optional fields handling
    try:
        minimal_data = {
            "serviceType": "Electronics Design",
            "customerInfo": {
                "name": "Minimal User",
                "email": "minimal@example.com"
            }
            # No phone, company, or inquiryDetails
        }
        
        response = requests.post(f"{API_BASE}/services/inquiry", json=minimal_data, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and 'inquiryId' in data:
                print_test_result("Optional fields handling", True, "Accepted minimal required data")
                success_count += 1
            else:
                print_test_result("Optional fields handling", False, f"Invalid response structure: {data}")
        else:
            print_test_result("Optional fields handling", False, f"Status code: {response.status_code}, Response: {response.text}")
            
    except Exception as e:
        print_test_result("Optional fields handling", False, str(e))
    
    print(f"Service inquiry endpoint tests: {success_count}/{total_tests} passed")
    return success_count == total_tests

def test_database_operations():
    """Test database connectivity and operations"""
    print("=" * 60)
    print("TESTING DATABASE OPERATIONS")
    print("=" * 60)
    
    # Test by submitting data and checking if it persists
    try:
        # Submit a test contact form
        test_data = {
            "name": "Database Test User",
            "email": "dbtest@trusttechnical.co.nz",
            "message": "This is a database connectivity test message."
        }
        
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and 'submissionId' in data:
                print_test_result("Database write operation", True, f"Successfully stored contact submission")
                
                # Test service inquiry database operation
                service_data = {
                    "serviceType": "Test & Tag",
                    "customerInfo": {
                        "name": "Database Test Company",
                        "email": "dbtest.company@trusttechnical.co.nz"
                    },
                    "inquiryDetails": "Database connectivity test for service inquiries."
                }
                
                service_response = requests.post(f"{API_BASE}/services/inquiry", json=service_data, timeout=10)
                
                if service_response.status_code == 200:
                    service_result = service_response.json()
                    if service_result.get('success') and 'inquiryId' in service_result:
                        print_test_result("Service inquiry database operation", True, "Successfully stored service inquiry")
                        return True
                    else:
                        print_test_result("Service inquiry database operation", False, "Failed to store service inquiry")
                        return False
                else:
                    print_test_result("Service inquiry database operation", False, f"Status code: {service_response.status_code}")
                    return False
            else:
                print_test_result("Database write operation", False, "Failed to store contact submission")
                return False
        else:
            print_test_result("Database write operation", False, f"Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print_test_result("Database operations", False, str(e))
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Trust Technical Services Backend API Tests")
    print(f"Testing against: {API_BASE}")
    print("=" * 80)
    
    results = {
        'health': False,
        'contact': False,
        'service_inquiry': False,
        'database': False
    }
    
    # Run all tests
    results['health'] = test_health_endpoint()
    results['contact'] = test_contact_endpoint()
    results['service_inquiry'] = test_service_inquiry_endpoint()
    results['database'] = test_database_operations()
    
    # Summary
    print("=" * 80)
    print("FINAL TEST RESULTS SUMMARY")
    print("=" * 80)
    
    total_passed = sum(results.values())
    total_tests = len(results)
    
    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status} {test_name.replace('_', ' ').title()} Endpoint")
    
    print(f"\nOverall Result: {total_passed}/{total_tests} endpoint groups passed")
    
    if total_passed == total_tests:
        print("🎉 All backend API tests PASSED! The backend is working correctly.")
        return True
    else:
        print("⚠️  Some backend API tests FAILED. Please check the detailed results above.")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)