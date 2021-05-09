# breaking-bad-projekt

Why used React:

1. It's very easy to use and fetch API in React since it has a concept of lifecycle that we can take advantage of, for example function calls. Since React uses components,
we can call an API where the UI renders it's state (which would be an empty array of addresses) and eventually the API request resolves,
the state is updated, and the component is rerendered with addresses in state. It's also easy to pass the API results to components whenever the state changes (eg. (items) -> CharacterGrid & (item)-> CharacterItem)

2. We were also already familiar with React and have some previous knowledge on how it works