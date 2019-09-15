---
date: "2019-09-16"
title: "[Notes] How to Write a Good Scientific Paper: Figures, Part 2"
---
[Source](https://www.spiedigitallibrary.org/journals/journal-of-micro-nanolithography-mems-and-moems/volume-13/issue-01/010102/How-to-Write-a-Good-Scientific-Paper--Figures-Part/1*1117/1.JMM.13.1.010102.full?SSO=1)  
[Source 2](http://www.lithoguru.com/scientist/litho_papers/JM3%20editorial%202014%20q1_Figures%20part2.pdf)

Assuming that the final graph will fit within a single column in
a two-column-per-page format.  
Examples use Matplotlib


* Set the chart area size to be 5 in. tall by 6.75 in. wide.  
    Use 4:3 as default or adjust if the data suggests a better shape.  
```
fig, ax1 = plt.subplots(figsize=(6.75, 5))
```    
* Chart font size to be 14 pt (7pt after shrinking 50%).  
```
plt.rcParams['font.size'] = 14
plt.rcParams['font.size'] = 12 # works too
```  
* Remove legend if not needed (put labels inside the graph if they fit
rathe than using a legend).  
    if using a legend, try to place it within the plot area.  
* Remove all gridlines.  
```
plt.rcParams["axes.grid"] = False
```
* Change axes line to black and 1pt thick.  
```
plt.rcParams['axes.edgecolor'] = 'black'
plt.rcParams['axes.linewidth'] = 1
plt.rcParams['axes.linewidth'] = 0.5 # works too
```
* Change major tick to "cross" and minor tick to "outside".  
* Format the chart area to to have no border.  
* Format the plot area to have a solid black border, 1pt thick and no fill.  
* Set the "axis crosses" point so that the two axes meet at the lower left corner.  
* Adjust the axes label numbers so that they have the proper number of decimal points.  
* If necessary, adjust the axes min and max values.  
* Add axis titles, 18pt (less if title is too long), no bold, use a rotated vertical title.  
* Data series should have a preferred color and symbol or line type/style for maximum
readability.  
* No title.  

