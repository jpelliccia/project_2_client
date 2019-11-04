<a href="https://imgur.com/nqVZA0q"><img src="https://i.imgur.com/nqVZA0q.png" title="source: imgur.com" /></a>

# Sneakerpedia

I developed a sneaker log where a user is able to sign up and log their favorite sneakers, their
collection or a wishlist of potential sneakers they may want to buy within a table by addidng the
sneakers name, color, and release date. The table of created sneakers is specific to each user.
I am a huge collector of sneakers and wanted something to store the names of all the sneakers I own
and also list sneakers I am interest in buying. I believe this can help people track and log their sneakers as well!

## Development Process

- Starting this project I wanted to create a sneaker encyclopedia where a user could
log in and click a brand and see sneakers associated with that brand with pictures,
descriptions and link on where to buy the sneaker.
- My relations where going to be a user has_many sneakers, brand has_many sneakers,
and sneakers belongs_to user/brand.
- After having difficulty and being time restricted I decided to switch up the whole
idea and created a sneaker log where a user could just create a sneaker and have it
stored in a table associated to their account. This could be either a sneaker wishlist
or a user's actual sneaker inventory.
- The new relation I used now was user has_many sneakers and sneakers belongs_to
user.
- It was easy to transition to this because I already had all the info and down down,
I just scrapped the idea of brands and already had user and sneakers. This made everything
run smoother for me and was able to complete the project requirements.


## WireFrames / User Stories

<a href="https://imgur.com/xxTBDTL"><img src="https://i.imgur.com/xxTBDTL.jpg" title="source: imgur.com" /></a>

- As a user, I would like to create a sneaker and add it to my collection.
- As a user, I would like to sign up/in/out and change my password.
- As a user, I would like to update a sneaker associated to my account.
- As a user, I would like a clean layout that is visually appealing.
- As a user, I would like success and error messages informing me after I have done actions.
- As a user, I would like to delete a sneaker if I made one by mistake.

## Future Additions

- Create a brands section with clickable brand images that display a specific brands sneakers.
- Let a user create a sneaker and upload an image of the sneaker.
- Create information for each sneaker with links on where to purchase the sneaker.
- Fix front end desgin to give it a more clean look.
- Create a buy and sell table for people to list profits made off selling sneakers.


## Technologies
For this project I used:
* JavaScript
* HTML
* CSS
* jQuery
* DOM
* AJAX
* Bootstrap
* Ruby on Rails
* Handlebars

## Website Link

https://jpelliccia.github.io/project_2_client/

## API Reference

https://github.com/jpelliccia/project_2_api

## Installing
1. To run this project
``` fork and clone this GitHub repository.```
2. Clone this repo.
3. Install dependencies with ```npm install```.
4. Run ```grunt serve``` to pull up the local host and run this project locally.


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
