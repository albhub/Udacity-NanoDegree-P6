
# Summary 

The visualization investigates the carrier delay data from 2003-2008. It takes the reader from the general flight and flight's delay evolution to one of the main causes of delay. This cause, formally late-arriving aircraft, could be corrected by the carriers to provide a better service. 

# Design  

explain any design choices you made including changes to the visualization after collecting feedback

I have selected to focus in the flight delay dataset from [RITA](http://stat-computing.org/dataexpo/2009/the-data.html). 
This data set ranges from year 1987 to 2008. There is detailed delay data from June 2003. As a disclaimer I have discarted to merely evolve some of the most commom ideas, as plot the better carriers, or group the causes by day of week or airport or mont in a concrete year. 

As a design principle to keep low the data load time the data has been formatted first and ready to use.

I decided to compare the evolution of main cause of delay for the different carriers . The major drawback of this approach was that a direct visualization of data is difficult to understand so, in consequence, the data needs to be put in perspective. So I have decided to construct a progressive aproximation from general to particular, as a little story to the viewer. This layout also permitted to my persona the exploration of diferent type of graphs, and screen layouts.

The first two graphs show the evolution of flights over the years and how the number of flights "on time" have incresased almost continuosly. I have decided to put the data in a yearly basis to aggrupate the month variation and simplify the variation. To show each of the data values I have added tips to each bar.

The conclusion from this plots could be in this way easyly followed.

The second part of the design focus in the explanation and distribution of delay causes. 

The causes are explained in a separate slide before plotting them so the interested readers could form "a priori" idea before the data evolution are show. Without this explanation (added after the first iterations) the data were more difficult to understand. 

The variation with years have been grouped into bars. My first idea was to use a stacked and grouped bars (simultaneosly via a radio button), but the stacked bars didn't add anything of interest. The legend has been plotted aside to help the comprenhension. As the text have been increased in the later iterations the y-axis have been moved slightly to the left. 

The grouped bar plot is intended to transmit the idea of the delay causes yearly variation, that later was to be related to the carrier main causes.

To distingish the main causes and their evolution, I have selected a calendar view with the dominant cause by day. This graph allow to discard a monthly variation or a day of the week predominance of causes within the year. The main delay cause was clearly show. 

The calendar design (from the referenced one [1]) have reduced the size of days and changed the colors to adapt to the color of the causes. The data until June 2003 have been supressed because there is no data available (before some iterations).

The first designs include a legend in the lower part, but takes too much page space so I have decided to include the colors in the written description.

The "Late-Aircraft" as the main cause of delay is plotted as the conclusion related to total cause. Two of the principal causes were carrier related, but it is the "Late-Aircraft" the more important. 

The graph is designed to compare graphically one airline vs the others by highlighting a particular -selected- airline in the graph. The airline selection show the yearly evolution of averaged "Late-Aircraft" delay and "Total delay". I have selected this type of way because it's the viewer who browsing the data could get to the stated conclusion.

To help to understand the browsing feeature (after feedback) the initial colors fade, and to recover them the viewer has to move over the lines.

To complete and close the visualization a closure slide have been added. This is conceived to provide a resume of the story, and a written conclusion.

# Feedback 

I shared the visualization with people in my enviroment, and the feedback that I have received could be resume in the following points:

"The numbers and titles are small" 

From my conversations about the graphs there is a common opinion that the number and axis titles are small. I have increased the size of them.

"The tips are sometimes difficult to read"

I have changed the tip style to improve their readbility.

"The color in calendar view is confusing" 

I have removed the color in the months that there is no data. 
And consecuently moved the message about the begining of data to a less prominent place.

"Grey lines are all? No, the color view after hover is not intuitive"

I have added an animation to show that the lines are coloured and to incite the viewer to move the mouse over. I seems more intuitive now to hover the mouse over the graphs and discover the relationships.

"The story seems to be properly conveyed but some of the statements are not clear. For instance, the messages in the last graph are confuse."

I have reformulated some sentences.

# Resources 

## Data origins: 

  - Grouped data from June 2003 to July 2016 get from
[bts](http://www.transtats.bts.gov/ot_delay/OT_DelayCause1.asp?pn=1)
Download file link: [data](http://www.transtats.bts.gov/ot_delay/ot_delaycause1.asp?display=download&pn=0&month=6&year=2016)

  - Complete data from [RITA](http://stat-computing.org/dataexpo/2009/the-data.html)
by years 1987-2008 
example [1992](http://stat-computing.org/dataexpo/2009/1992.csv.bz2)

## Sources:

  - Calendar view [1](http://bl.ocks.org/mbostock/40633180)
  - [2] Presentation  :: http://mbostock.github.io/d3/talk/20111116/#0
  - [3] D3js manual :: d3js.com
  - [4] Bl.ocks Example: http://bl.ocks.org/mbostock/3887051
  - [5] Bl.ocks Example: http://bl.ocks.org/Caged/6476579

