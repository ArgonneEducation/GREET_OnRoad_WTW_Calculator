# GREET_OnRoad_WTW_Calculator
This repository contains code for an app to access GREET on-road data from the WTW Calculator.

Data accessible through this app includes only information on different fuels for On-Road vehicles and different fuels.  For each fuel/metric combination available, users can view Well-to-Pump, Pump-to-Wake, and Well-to-Wake values for the specific metric chosen. These are defined in the [glossary](#Glossary).  The top two dropdown boxes feed the bar chart.

Below the chart is an interactive Data Table which is fed by a separate dropdown menu.  Here useres can select a metric, and the values for each of the available fuels then populate the table.  This allows for easier comparison between fuels as well as the opportunity to recognize patterns that are not as apparent in the visualization of only one fuel/metric combination at a time.


# Opening the App
Access the app at the link: https://argonneeducation.github.io/GREET_OnRoad_WTW_Calculator/

# Using the App


# Glossary

### Biodiesel (BD 100-Soybean)
Biodiesel is a drop-in fuel for traditional diesel engines.  The 100 in the designation indicates that it is 100% from recently living organic matter.  In this case, it is from soybean oil, processed in a refinery to produce a fuel compatible with diesel engines.

### Corn Stover
The stalks, leaves, and husks that remain in the field after the corn harvest.

### Diesel-US Mix
Values here refer to assumptions made that reflect emissions based upon typical diesel production from petroleum and use in the United States, with regional differences averaged out.

### Ethanol (E 100-Corn)
Ethanol is a product of fermentation of recently living organic matter.  Ethanol is widely blended into petroleum gasoline in the United States.  The 100 in the designation here, however, indicates that it is 100% from recently living organic matter.  This is not a common fuel for vehicles in the United States.  The "Corn" in the designation indicates that the values are based upon production of ethanol from corn grain.

### Gasoline-US Mix
Values here refer to assumptions made that reflect emissions based upon typical gasoline production from petroleum and use in the United States, with regional differences averaged out.



### Pump-to-wake (PTW)  
The stage in the life cycle analysis of a fuel that includes the combustion of fuel during vehicle operation.

### Well-to-pump (WTP)
The stages in the life cycle analysis of a fuel that include exploration, recovery(e.g. from a well), fuel production, and the subsequent transportation of the fuel to the pump which can deliver it to a vehicle.

### Well-to-wake (WTW)
In a life cycle analysis of a fuel, includes the addition of well-to-pump and pump-to-wake stages.  Well-to-wake values are also referred to as cradle-to-grave in an attempt to convey that they 




index.html and app1.js allow for selection of feedstock and metric.

The data are now hosted on GitHub and the javascript file has been edited to call on the file hosted on GitHub via the url.