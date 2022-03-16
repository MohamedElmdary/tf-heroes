# TF Heroes

TF Heroes is a project for `codescalers` onboarding. Idea came from angular docs which provide a tutorial called **heroes** application.

## Idea
Creating **heroes** app using different `js` frameworks
- Svelte
- Vue
- React
- Angular

### Structure
```sh
|
|
|- src
|   |- pages
|   |   |- Dashboard(/)
|   |   |- List(/heroes)
|   |   |_ Hero(/hero/:id)
|   |_...
|_ ...
```

### App Idea

#### Dashboard View
Show the most top 4 heroes. clicking any of them allows user to route to `/hero/:id` and update the hero's name only!.

#### List View
Show all the available heroes and doing same functionality as above.

#### Hero View
Show the hero details ID(**readonly**) and name(**editable**)
> NOTE: User can't update name to empty string.

### ScreenShots
