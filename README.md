# Taiyo.AI-Frontend-Engineer-Coding-Task


# OpenCageData API Integration Guide

This guide provides instructions on integrating the OpenCageData API into your project for geocoding and location-based services.

## API Validity

The API key obtained for accessing the OpenCageData API is valid for a duration of 2 days from the time of generation.

## Getting Started

1. To generate your API key, visit [OpenCageData Sign In](https://opencagedata.com/users/sign_in).

2. Log in to your account or create a new one if you haven't already.

3. After logging in, navigate to the appropriate section to generate an API key.

4. An email containing your API key will be sent to the address associated with your OpenCageData account. Keep this API key secure.

## Integration Steps

1. Locate the file named `leaflet-map.tsx` within the path `my-app/src/components/maps/leaflet-map.tsx` in your project directory. This is the file where the OpenCageData API key needs to be configured.

2. Open the `leaflet-map.tsx` file in your preferred code editor.

3. Look for the line number 12 in the `leaflet-map.tsx` file.

4. Replace the existing API key with the API key you received via email from OpenCageData. The API key is typically passed as a parameter when making API requests.

5. Save the changes to the `leaflet-map.tsx` file.

## Example:

```jsx
// my-app/src/components/maps/leaflet-map.tsx

// ... other imports ...

const API_KEY = 'YOUR_OCD_API_KEY'; // Replace this with your actual API key

// ... rest of the code ...



<h1>Objectives of Contact Page</h1>
<ul>
    <li>The app should have a form for adding new contacts.
    </li>
    <li>The app should display a list of all added contacts</li>
    <li>
    Each contact should have a button to view the contacts details
    </li>
    <li>
    The app should be able to edit and delete contacts
    </li>
    <li>
    Make use of Redux to store the contact data
    </li>
    
</ul>
<h1>Objectives of Charts and Maps Page</h1>
<ul>
    <li>Build a simple dashboard with:
    </li>
    <li>- A line graph showing the cases fluctuations</li>
    <li>
    - A react leaflet map with markers that indicates the country name, total number
    of active, recovered cases and deaths in that particular country as a popup
    </li> 
</ul>

<h1>APIs Used</h1>
<ul>
    <li>World wide data of cases: https://disease.sh/v3/covid-19/all
    </li>
    <li>Country Specific data of cases: https://disease.sh/v3/covid-19/countries</li>
    <li>
   Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all
    </li> 
</ul>

<h1>Technologies Used</h1>
<ul>
    <li>ReactJs
    </li>
    <li>TypeScript</li>
    <li>
  TailwindCSS
    </li> 
    <li>React Router v6
    </li>
    <li>React Query</li>
    <li>
    Redux
    </li> 
</ul>

<h1><strong> Development Installation </strong></h1>

Follow these instructions to set up your development environment, which you need to do before you start contributing code to this project.



