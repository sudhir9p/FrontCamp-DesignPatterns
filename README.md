# Front Camp Review Comments.

## Package declaration

### 1.1 The production build will not work in IE11 with such a configuration of the package. Window.fetch is a production dependency. 
The only reason why it works, is that window.fetch imported directly in the index.html. 
This is a kind of improper usage of the packaging at all

--> I have removed the references in index.html file and checked,this is still working in production build,
Initially when there was no babel / webpack configuration for 1st task I have added them in index.html and later forgot to remove(which are not required as I already mentioned in babelrc file)



### 1.2 Repository link would be nice to have

--> Not sure what this mean, guess it is  credits to NewsApi.org or repo of newsapi.org


### 1.3 Usage of relative path to the webpack binary demonstrated not clear undersanding of a mentee the way how nodeJS looking for binaries in node_modules.

--> guess this comment is because of exclude in webpack.config.js exclude: /(node_modules)/, (line 23)
Explicitly excluding node_modules not required.I understand how nodeJs look for binaries but in initial stages while working with angular 2, typescript configurations used consider node_modules so 
with past experience , thought it was safe to exclude while compiling

### 1.4 It's kind of risky to use caret ranges for production dependencies. It depends on how much reliable the packges pulled into the app and how CD pipeline configured,
 but technically it can bring a lot production incidents. So in absence of justifying reason, production package should not use any caret deps.
 
 --> Yes aggreed, I prefer using stable versions and avoid going to any updated packeages automatically. It was by default when installed packages.
 Removed and updated package.json
 
 ## Webpack
 
 ### 2.1 The only development mode provided. Production mode should be provided as well. There are a lot of features required to touch for clear understanding of the reasons 
 standing behind it: minimification, source mapping, bundle splitting, images hashing, etc.
 
 --> yes in webpack config js I have provided only production mode but it CAN be passed as ARGUMENT while running webpack , so provided it as argument in package.json
 
 
 ###  2.2 Remains unclear how developer served the static while was developing the application. It's highly recommended to use the standard devServer option for this purpose.
 Comparing to old-school gulp or included into default packages of python http servers, the incremental builds of the Webpack devServer should be recognized
 
 -->Yes , added devServer option , now automatically changes are detected not only for JS files but also for html files.
 
### 2.3 Among with dev-server would be nice to see HMR feature demo of usage.
 --> yes added the hot option for hmr
 
 
 ### 2.4 Polyfills imports would be great to have in webpack entry point configuration, just because these deps aren't used directly in the newsapp.js code.
 --removed from newsapp.js and added in webpack.config
 
### 2.5 For unknown reason some polyfills are imported directly in the index.html file. This looks like total misunderstanding of the main concepts standing behind application building with webpack.
 --removed , same as 1.1
 
 
 ## Code structure
 
### 3.1 In the newsapp.js we can see both: class declaration, instantiating and manipulation. It's bring not required complexity to the code debugging. The very simple rule: one file = one declaration.
 -->Yes added new class News and moved the class logic to separate file
 
### 3.2 On the #77 line of newsapp.js there is an import. Imports are expected to be in the head of the file. All the deps are in the beginning. This makes your code predictable for others.
 Predictabilty of the code = price of maintenance
 -->THIS import is load the files on demand , kind of lazy loading the modules
 
### 3.3 I'd suggest to start linting right from the beginning of the developer profession. It's a kind of "washing hands before eat": just use it always to avoid dozen of disappointing mistakes some
 of which potentially may lead to the very complicated hard to catch bugs.
 --> added eslint
 
 ##  Naming

### 4.1 Classes should not be called as a verb, because classes never doing one simple action. DislpayNews is a wrong name for the class. Considering what this class doing, I'd suggest something like NewsManager.
 --Yes updated
 
 ### 4.2 SourcesOnChange does not explain what this method doing. I'd suggest to call it update. The relation between handler sourcesOnChange and update is established in #75 line of newsapp.js.
 -->Yes Renamed
 
### 4.3 #73 line of newsapp.js introduces variable obj. It's a strong antipattern to use. displayNews for the class DisplayNewswould be much more descriptive. There are more simliar examples in the code.
--> Updated  local variable name from obj to newsManager

### 4.4 #71 line of newsapp.js uses ddlchannelslist. Can't guess what is ddl here? Why not camel case? This dramatically reduces the code readability.
ddl was for dropdownlist, updated with camel Casing


## Architecture
### 5.1 Class DisplayNews has a dependency FetchNewsData that is not required on construction. Should be required. This makes the class flexible for using with another provider of data. In current realisation this is impossible.
--> yes removed apikey from constructor as  this is not used however and not required

### 5.2 DisplayNews expects for apiKey on construction, but doesn't use it. Instead it requires apiKey on every call. This makes displaySources actually a static method that has no any relation to the class at all. 
Strongly saying apikey is not a thing to get remembered by class DisplayNews. Apikey is a property of the transport, not View.
 In current realisation more suitable to keep apikey in the httpservice.js.
 
 -->yes removed passing apikey value from presentation layer everytime and moved to httpservice
 
 
## NOT YET DONE.
 
 5.3 newsapp.js sourcesOnChange demonstrates lack of understanding of the errors handling strategy in the project. It's dangerous to turn red colored default exceptions into ordinary console output. Since the handler itself supposed to be a callback, i.e. launching in the tasks queue of the event loop, any exeption there is not breaking the code. Thus: two possible solutions here. a) not catch it at all; b) catch and use solid error handling strategy here. The used approach is the worst of all possible. Among with that «Lazy initialization» task expected from a mentee to implement error handling strategy that includes lazy loading of the some bundle chunks. This is not done at all.
5.4 Apart from that singleton is not used used for displaying error, as it is described in the task, one more place in the code must be done exactly with Singletone: httpservice. Until the application doesn't work with different backends (quite rare use case), transport should be a singletone for the set of critical for app performance reasons: memory, caching, queueing. Requests concurrency also won't be managed properly without one httpservice for the app.
5.5 The factory pattern doesn't work with GET, POST, PUT as it required in the task. I'd also propose to move it away from entities.js file (NewsSourceFactory is not an entity), call that Repository and implement work with factory there.
5.6 MV* pattern is not applied in the code base. It's not demonstrated that mentee understands the difference between data, business-logic and view; importance of controlling the data flow via controller or similar constructions from other software design patterns.


# Review comments By Siva Ninala

### 1. Add a proxy layer on top of the factory implementation.

### 2. Create an error popup using the singleton design pattern.
	Example:
		In the NewsSourceData class, if the API response is empty, rather returning a null display an error popup.

### 3. if (data != null && data != undefined) can be simplified as if(data)
--Done

### 4. See if you can use || operator to set the default values
	const name = data.name ? data.name : "";
	
	--Done

### 5. The early returns(multiple return statements) are always not good. The singleton implementation for NewsSourceData can be simplified as below

	constructor(data) {

		if(! NewsSourceData.instance){
			this.newsData = data;
			NewsSourceData.instance = this;
		}
		return NewsSourceData.instance;
	}
	
	--Done


### 6. 
export class constants {
	static ddlchannelslist = “ddlchannelslist”;
   static selectedSourceName = “selectedSourceName”;
   ...
   }
These are just static members.They are not constants. One way of defining constants in ES5 is
var AppConstants = {
	APP_NAME = 'News App'
}
Object.freeze(AppConstants)

(or)
const APP_NAME = 'News App',
      URL = 'http://test.com';
class Constants {
  static get APP_NAME() {
    return APP_NAME;
  }
  static get URL() {
    return URL;
  }
}


--Done , 1st way

###  7.
const selectedSourceCountry = document.getElementById(CommonUtilities.constants.selectedSourceCountry);
const selectedSourcedescription = document.getElementById(CommonUtilities.constants.selectedSourcedescription);
const selectedSourceLanguage = document.getElementById(CommonUtilities.constants.selectedSourceLanguage);
const selectedSourceUrl = document.getElementById(CommonUtilities.constants.selectedSourceUrl);
....

The code looks duplicated and looks ugly. Try to make it better.

--Done used Maps

### 8. Add a web pack plugin remove the comments and also understand the optimization for production mode
-->Done, Added UglifyJs Plugin for optimization and to remove comments

 
 
 
 
 
 
 
 
 
 
 
 


