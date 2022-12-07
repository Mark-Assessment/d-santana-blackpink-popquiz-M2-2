# Domenica's Portfolio 2 website

## User-Centric Frontend Development Milestone Project.

![Alt text](docimages/amairesponsive-screenshot.png)

Website presents Domenica's portfolio-2 project called Blackpink Pop Quiz .
Users will be able to find interesting content in easy and simple way.

This project is for educational purposes and can not be used as a template for a business use.
Main aim is to build responsive website with HTML JAVASCRIPT and CSS only. I have used Bootstrap framework to keep website consistent and clear.


## [View life website in github pages](https://domenicasantana.github.io/fashion-stylist/index.html)
---

# Table of contents

- [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
        - [New user goals](#new-user-goals)
        - [Returning user goals](#returning-user-goals)
        - [Website owner business goals](#website-owner-business-goals)
    - [User stories](#user-stories)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
- [Technology](#technology)
- [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Compatibility testing](#compatibility-testing)
    - [Code Validation](#code-validation)
    - [User stories testing](#user-stories-testing)
    - [Issues found during site development](#issues-found-during-site-development)
    - [Performance testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Screenshots](#screenshots)



# UX

## Website owner motivation goals for project 

The main purpose of this website is for  all Blackpink fans known as Blinks,and the new fans to 
have a fun time playing this pop quiz that cointains interesting data from Blackpink.

## User goals

### New user goals:
- user can easily see that this is K-pop Girk Group pop quiz.
- user is able to find the instrunctions on the landing page.
- user can easily locate the start button and the counter at the bottom.


### Expectations from user goals:
- user can learn more about Blackpink new records and new updated information when they come back to the website.
- users to be able to play the game and expect website to match Blackpink colors insignia nicely.

## User stories
* As user I want you to land on main page and be able to tell what is the game about.
* As user I want you to easily navigate through the website.
* As user I want you to press Play and play the game.
* As user I want you to see Rules before the game starts.
* As user I want you to be able to tell how good you have done with questions by tracking the Score.
* As user I want you to be able to press one of the buttons  and see the color of it, if theAnswer is Correct or Incorrect.

### As a new customer:
* I wish to find information about this girl group in an easy and fun way.
* I would like to know my score throughout the game. 
 
## Structure of the website

The website is designed to be easy and user-friendy on all type of devices. On desktop, tablet or mobile device there should be no difference for a user to have a fantastic experience. All parts are designed to achieve maximum user satisfaction including the color palette that has been used. User will get some interaction from the interface .

## Wireframes

I used the Mockup app to create the wireframes for desktop, tablet and mobile view.

## Desktop View Home

![Desktop Home Wireframes](images/website-computer.png)


## Tablet View Home

![Tablet Home Wireframes](images/ipad-websites.png) 


## Mobile View Home

![Mobile Home Wireframes](images/iphonepro-website.png) 


## Surface

### Colors
![palette](images/project2-palette.png) 

Main colours used in a project:
* background color: #00000
* button color : HEX #F49AC2

### Fonts 

* As a main font I used Sans Roboto , and as a backup Kanit, sans-serif and more. 

### Images

* I used images from [SeekLogo](seeklogo.com) and there are credited in [credits](#credits) section.

[Back to Table of contents](#table-of-contents)
___
# Features

* The website consists of one page.
* Responsive in all devices that players want to use.
* Interactive buttons.
* counter for questions and correct answers.

The website has the folowing features:

## Home
* Users can see the rules and the button start from the beginning and after each question they can see features like the button next and also the score for correct answers plus how many questions they have done. 

##  Future implementations

* Add new score table and a user bakcup to compare your score with other people .
* A blog section in a new page so friends and others people can leave comments and interact between them .
* link an Spotify API to hear Blackpinks music while customers play the game.


[Back to Table of contents](#table-of-contents)
___
# Technologies used

### HTML5
* As a structure language.

### CSS
* As a style language.

### Javascript
* As a programing language.

### Bootstrap 
* Bootstrap as a CSS framework to keep responsive, mobile first aproach.

### GitHub
* As a software hosting platform to keep project in a remote location.

### Git
* As a version-control system tracking.

### Gitpod
* As a development hosting platform.

### Mockup App
* As a wireframing tool.


[Back to Table of contents](#table-of-contents)

___
# Testing

## Functionality testing 

 I used Chrome developer tools throughout the project for testing and solving problems with responsiveness and for style issues.


## Compatibility testing
 Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices in Chrome developer tools. 
 
 I tested on hardware devices such as: Ipad air with iOS, Iphone SE mini with iOS , Macbook air with MacOS


## User stories testing

### As a User :

- As user I want you to land on main website page and be able to tell what is the game about.
    >Expected results is user looking at the logo and identifying the main theme of the website and see the rules of the game straightaway.

- As user I want the user to easily navigate through the website.
    > The expected results is user looking at the buttons in game and be able to press them and pass to the next question.

- I want my customers to be able to identify the correct and wrong answers.
    > User can see whith the colors red and green which answers is correct and the score is reflected.


## Issues found during site development

* #### Navbar links  displaying on the wrong side of the screen in desktops devices. 

When displaying the website on desktops devices , my navbar bar elements displayed on the left side of the screen right next to the logo and it making it look too crowded ruining the users experience.

> I fixed it by changing the bootstrap class name to ms-auto .


* #### The call to action botton was not centered in tablets , mobiles devices


When displayed on tablets and mobile devices the botton on the home page was looking out of placed , it was displayed on the left side. 

> I fixed this by taking it out of the buttob out of the previous div and giving it a new div with the bootstrap classes col and text-center. 


## Performance testing

I run [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es) tool to check performance of the website.
I had to do several changes to improve performance, specially replacing images for lighter formats such as .webp which improved the performance significantly. Screenshots are presented below:

Before:

![performance before](docimages/lighthouse-before.png)



Final results:
![performance_final](docimages/lighthouse-results.png)

I noticed that this tests scores vary from time to time and depends on external libraries as well. 



## Code Validation
 At the and of the project I used two websites to validate my code
 
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS


 * [Nu Html Checker](https://validator.w3.org/) to test HTML


[Back to Table of contents](#table-of-contents)

___
# Deployment

The project was deployed on GitHub Pages. I used Gitpod as a development environment where I commited all changes to git version control system.
I used push command in Gitpod to save changes into GitHub.

To deploy a project I had to:

* Log in to GitHub and click on repository to deploy ([fashion-stylist](https://domenicasantana.github.io/fashion-stylist/index.html))
* select `Settings` and find GitHub Pages section at the very bottom of the page
* from source select `root` and then `main` branch.
* click `save` and page was deployed after auto-refresh.
>  Your site is published at https://domenicasantana.github.io/fashion-stylist/index.html

To run localy:
* Log in to GitHub and click on repository to download ([fashion-stylist](https://domenicasantana.github.io/fashion-stylist/index.htmls))
* select `Code` and click Download the ZIP file.
* after download you can extract the file and use it in your local environment 

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([fashion-stylist](https://github.com/domenicasantana/fashion-stylist)) into your github account.

[Back to Table of contents](#table-of-contents)
___
# Credits


* To complete this project I used Code Institute student template: [gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

* I used Startbootstrap's Full Width Pics template: [ template](https://startbootstrap.com/template/full-width-pics)

* Ideas and knowledge library:

    * [w3schools.com](https://www.w3schools.com)

    * [css-tricks.com](https://css-tricks.com/)

    * I used Startbootstrap's Gallery with Images Thumbnails template: [template](https://startbootstrap.com/snippets/thumbnail-gallery) 

     * [mdbootstrap.com](https://mdbootstrap.com/docs/standard/navigation/footer/)
     I used this code for the footer and then I customized with my own changes also using bootstrap. 


    
    * [stackoverflow.com](https://stackoverflow.com/) I used stack overflow constantly whenever I was unsure about HTML or CSS syntax or wanted to find an easier more stream-lined way of doing things.
   

* Other Tools:
  
   * [convertio.co](https://convertio.co/download/8f5e5e55e6f0ba84bea69ead1b619d2dd0cbf7/) I used convertio to convert my images to lighter formats which improved the performance of the site significantly.

### Code

* Bootdey: [services list](https://www.bootdey.com/snippets/view/Services)
I used this list template and then modified it . 
* Mdbootstrap: [Form](https://mdbootstrap.com/docs/standard/extended/registration/)
I used and modified this form 

### General Content:

*  Testimonials:  [bbbotstrao.com](https://bbbootstrap.com/snippets/bootstrap-5-user-testimonial-star-ratings-51527336)
I used this part of this code to the the testimony in homepage and then I modified it .





### Images:

#### freepik.com:
* [assets/images/black-background.jpg](https://www.freepik.com/free-photo/attractive-woman-wearing-hat-posing-black-background_14482579.htm#query=background%20fashion&position=21&from_view=search) image by serhii_bobyk on Freepik

* [assets/images/skirt-sweater.jpg](https://www.freepik.com/free-photo/set-with-fashionable-women-s-clothing-skirt-sweater-sandals-accessories-top-view-flat-lay_20083375.htm#page=2&query=clothes&position=12&from_view=search) image by pvproductions on freepik

#### pexels.com:
* [assets/images/pexels-aizhana-aldanova.jpg](https://www.pexels.com/photo/woman-wearing-white-shirt-and-yellow-skirt-sitting-on-brown-concrete-brick-stairs-983564/) Photo by Aizhana Aldanova from Pexels 

* [assets/images/pexels-anastasiya-gepp-2065200.jpg](https://www.pexels.com/photo/woman-standing-wearing-white-floral-lace-blouse-2065200/) Photo by Anastasiya Gepp from Pexels 

* [assets/images/pexels-godisable-jacob-1394882.jpg](https://www.pexels.com/photo/woman-standing-at-outdoors-while-holding-black-leather-bag-1394882/) Photo by Godisable Jacobs from Pexels 

* [assets/images/pexels-konstantin-mishchenko-1926769.jpg](https://www.pexels.com/photo/woman-standing-indoor-1926769/) Photo by Konstantin Mischchenko from Pexels 


#### thispersondoesnotexist.com:
* [assets/images/profile-picture-nina.webp](/this-person-does-not-exist.com) Photo by AIfrom thispersondoesnotexist

* [assets/images/avatar-millie.webp](/this-person-does-not-exist.com) Photo by AI from thispersondoesnotexist


* [assets/images/avatar-andrea.webp](/this-person-does-not-exist.com) Photo by AI photo from thispersondoesnotexist

#### unsplash.com:

* [assets/images/vladimir-yelizarov-2OhHpRu2Fhg-unsplash.jpg](https://unsplash.com/photos/2OhHpRu2Fhg) Photo by Vladimir Yelizarov from unsplash

#### burst.shopify.com:
* [assets/images/womens-summer-fashion.jpg](https://burst.shopify.com/photos/womens-summer-fashion?q=fashion) Photo by Sarah Pflug from burst shopify


[Back to Table of contents](#table-of-contents)
___

# Screenshots

## Project screenshots

### Home Page

![Home Page](docimages/Screenshot-home-1.png)
![About-Me-instroduction](docimages/Screenshot-home-2.png)
![Testimonials](docimages/screenshot-footer-home.png)

### Contact Page

![Contact Page](docimages/Screenshot-form.png)

### Gallery Page

![Gallery Page](docimages/Screenshot-gallery.png)


[Back to Table of contents](#table-of-contents)
___