
# WebDev Test  
  
This is a web development test focused on implementing a web layout and the common user experiences.  

Preview: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

  
Specifications:  
1. Open tiles (proper animations / transitions)  
2. Form fields validation (all fields required)  
3. Form fields interaction (focus / active state)  
4. Functional slider / progress bar.  
5. “Contribution” title interaction (show more / show less)  
6. “Contribution” title edition when I click the pencil (Mockup not available, use your own creativity)  
7. Target date label consistency (You should not show it if there is no target date selected)  
  
## Implementation  
I decided to make this an Angular 5 project. I'm currently studying this technology so I try to use it as much as I can. Also, this is a perfect chance to use it for what Angular is borne: nice front-end development.

## Getting Started  
This project has his own packet.json file. Once the project is downloaded, you can resolve the project dependencies using your favorite node packet manager. I. e. :
```
npm install
```
or
```
yarn
```
When the dependencies are solved, you can run the project locally using 
```
ng serve --open
```
You can eventually use ``--port 1234`` parameter to use a port other than the default ``4200``.

## Usage
All the Contribution can be edited clicking on the Contribution title. This will open the editing form.
When the form is shown, you can edit his fields. You can activate the title editing, clicking on the pencil icon. Click SAVE to persist the data (simulated) or click CANCEL to close the editing form. All the fields are required. Any validation error will be shown.

The range in the top right is used to set the contribution progress. It is made with a range input element and a div>div element under positioned via the position style set to absolute. The change of the `` progress`` property changes the green div width making it look like part of the range input. The range input bar is set as transparent and the slide thumb is custom styled.

The animations are made via CSS transitions.

## Limitations
Data are currently mocked and any form submit will not cause any actual data persist.

## Contributions
This is just a test project so not that prone to pull requests, but any suggestion to this implementation would be really appreciated. You can send them at info {at} danielerapisarda.com . 
Thank you in advice.

## Demo
[Here it is!](www.danielerapisarda.com/proj/webdev-test/)
