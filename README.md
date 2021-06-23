# breaking-bad-projekt

This is an application built with the React library. The website shows all characters that have played a role in the TV show Breaking Bad by fetching the data from an API. You can also click on a character to show additional information or save the character to favourites.

Why we used React:

1. It's very easy to use and fetch API in React since it has a concept of lifecycle that we can take advantage of, for example function calls. Since React uses components,
we can call an API where the UI renders it's state (which would be an empty array of addresses) and eventually the API request resolves,
the state is updated, and the component is rerendered with addresses in state. It's also easy to pass the API results to components whenever the state changes (eg. (items) -> CharacterGrid & (item)-> CharacterItem)

2. React lets us re-use components [1]. There are a lot of components that are being re-used in this project and depending on what needs to be changed according to the feedback we get, this will give us more flexibility and time-saving in development. While this is also as easily possible using Vue, we found ourselves more comfortable with React's syntax, eg. while comparing codes from both Vue and React, it was easier to understand what the project using React library was doing and the syntax was somewhat familiar.


How to run:
1. Have Git & Node.js installed
3. Open a terminal of your choice
4. Choose or create a Github repository to clone and use
5. Download or clone this project to the repository (using the site or terminal command "git clone {url of this project}")
6. Make sure to navigate to the main project folder (js-ramverk)
7. Type "npm start" in the terminal to run the project



Sources:
[1] https://www.tutorialspoint.com/reactjs/reactjs_overview.htm
