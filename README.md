# Frontend-Engineer-Coding-Task


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
     <li>React Leaflet :https://api.opencagedata.com/geocode/v1/json?q=${lat.lat}+${lat.lng}&key=${API_KEY}
    </li>
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

<h1><strong> Manual Installation </strong></h1>

_Note_: The installation steps assume you are using a Unix-like shell. If you are using Windows, you will need to use `copy` instead of `cp`.

1. Install Node.js. The recommended way is to Node through [nvm](https://github.com/nvm-sh/nvm). You can also install [node.js](https://nodejs.org/download/release/v18.2.0/) version 18.2.0 directly from the Node.js website.
2. [Clone](https://github.com/aayanlobo/CovidConnectPlus.git) your new fork of the repository from GitHub onto your local computer.

   ```
   $ git clone https://github.com/AliyanChanegaon/Frontend-Engineer-Coding-Task.git
   ```
3. Navigate to root directory and implement the following commands :

   ```
   $ cd my-app
   $ npm install
   $ npm run start
   ```


# Links

- [Deployed Project](https://aliyan-covid-tracker.vercel.app/)


# Showcase


<table>
  <tr>
    <td><img src="https://i.ibb.co/7jHLjVx/1.png"  alt="" /></td>
    <td><img src="https://i.ibb.co/vJN1m7f/2.png"  alt="" /></td>
  </tr>
  <tr>
   <td><img src="https://i.ibb.co/qYvZyZw/3.png"  alt="" /></td>
    <td><img src="https://i.ibb.co/BVvgcr7/4.png"  alt="" /></td>
  </tr>
    <tr>
   <td><img src="https://i.ibb.co/kDdQ3Bx/5.png"  alt="" /></td>
    <td><img src="https://i.ibb.co/MsPGL88/6.png"  alt="" /></td>
  </tr>
    <tr>
   <td><img src="https://i.ibb.co/mqJ0H9C/7.png" alt="" /></td>
    <td><img src="https://i.ibb.co/Kz1Wt8R/8.png" alt="" /></td>
  </tr>
  
  

</table>



