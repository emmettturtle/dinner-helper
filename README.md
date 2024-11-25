# Dinner Helper


## Overview
Dinner Helper is a web app designed to help you figure out what to make for dinner. Upload a photo of the food you have (pantry, refrigerator, etc) and Dinner Helper will tell you what food items you have and how many of each. (coming soon…) It will then give you recipe ideas of what to cook, based on those items. Check out the live app [here](https://peppy-pika-405a75.netlify.app/). 



#### Technologies Used
> This project uses the Next.js stack along with Tailwind for styling. 
>
> As well as the UploadThings API for file upload and storage, as well as the Open AI API for computer vision image analysis and content generation. 


## Model Choice
My choice in AI/ML model was a tough decision that ended up taking quite a lot of research and testing. I was initially looking into using what I heard was one of the best public (and free) computer vision models, Google Cloud’s Vision AI API. But after additional research and testing, it’s apparent lack of public prompting, when submitting individual images, meant it was difficult to dictate to the model specific requests. For instance, that I want it to identify an image of an open refrigerator, not as a refrigerator, but as the food items within it, as well as the quantities of those items. This brought me back to good ‘ol Open AI. The ability to combine image analysis with prompting allows for a more targeted analysis to be done of the image. As well as it allowing me to customize the response format, leading to a cleaner response extraction process. It definitely isn’t perfect, and will still miss items in images with excess detail or not high quality, but so far, it seems to do a decent job. 


## Challenges
The biggest challenge with this project, as it seems to be for most of this nature, was properly utilizing and linking up multiple different APIs to execute a feature. Going through pages of documentation both from Next.js, Open AI, and UploadThings, on how to properly format and extract data, make calls, etc. But with persistence and testing, it’s always satisfying when everything finally clicks together. Another challenge for me was continuing to grow my knowledge of Next.js.  I have worked on some projects utilizing it before but most of my professional experience has been using different versions of React. Continuing to learn how to properly utilize client and server side components, has been challenging and super interesting. 

## TODOs
- Tune prompting to model to have more successful results. 
- Add the recipe recommendation feature. 
- Continue to improve styling and UI.