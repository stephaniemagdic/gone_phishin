# Getting Started with Create React App

## ARCHITECTURE

### Context: 
  #### Data Context
    NECESSARY for fetching and setting current data:
    - [ show, setShows ] / fetch and set all shows by year.
    - [ isLoading, setIsLoading ] 
    = [ currentSong, setCurrentSong ] / fetch current song details to play track from two components - audio player component (next button) and track on click event.
    - [ tracks, setTracks ] / get all tracks by show
    OPTIONAL:
    - [ year, setYear ]  / use year for styling logo/header

    ```<RecipeContext.Provider value= {
      updateTracks,
      updateShows,
      setCurrentSong
    }>
    ```

  ```Note: use effect will be used on most individual components with router: 
    useEffect(() => {
      updateShows(url${this.params.key})
      // or updateTracks(url${this.params.key})
    }, [])
  ```

  #### Values to be passed into child components:
    - updateShows(year)
    - updateTracks(show)
    - setCurrentSong //get details 

### Router:
```
In app file return (
  <DataProvider>
    <Route render Dashboard/YearDisplay >
    <Route render ShowDisplay >
    <Route render TrackDisplay >
  </DataProvider>
)
```

### Component Folder:
  - Header
  - Footer
    - AudioPlayer
  - Dashboard/YearDisplayIndex
    - YearContainer
    - Year
  - ShowDisplayIndex
    - ShowContainer
    - Show
  - TrackDisplayIndex
    - TrackContainer
    - Track

  
