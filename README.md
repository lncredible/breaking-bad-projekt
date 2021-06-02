# breaking-bad-projekt

This is an application built with the React library. The website shows all characters that have played a role in the TV show Breaking Bad by fetching the data from an API. You can also click on a character to show additional information or save the character to favourites.

Why we used React:

1. It's very easy to use and fetch API in React since it has a concept of lifecycle that we can take advantage of, for example function calls. Since React uses components,
we can call an API where the UI renders it's state (which would be an empty array of addresses) and eventually the API request resolves,
the state is updated, and the component is rerendered with addresses in state. It's also easy to pass the API results to components whenever the state changes (eg. (items) -> CharacterGrid & (item)-> CharacterItem)
