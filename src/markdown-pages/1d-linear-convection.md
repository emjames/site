---
date: "2019-10-24"
title: "[Notes] 1-D Linear Convection"
---
[Source](https://nbviewer.jupyter.org/github/barbagroup/CFDPython/blob/master/lessons/01_Step_1.ipynb)

## 1-D linear convection model
$$
\frac{\partial u}{\partial t} + c \frac{\partial u}{\partial x} = 0
$$

The equation represents the propagation of the initial *wave* with speed $c$, without change of shape.

### On linear interpolation
**Forward difference**
Consider a linear interpolation between the current data $(x_{0}, t_{0})$ and the *future* data
value $(x_{1}, t_{1})$. The slope of the secant line between these two points approximates the
derivative by the *forward* (two-point) difference $(x_{1} - x_{0}) / (t_{1} - t_{0})$

**Backward difference**
Consider a linear interpolation between the current data $(x_{0}, t_{0})$ and the *past* data
value $(x_{-1}, t_{-1})$. The slope of the secant line between these two points approximates the
derivative by the *backward* (two-point) difference $(x_{-1} - x_{0}) / (t_{-1} - t_{0})$

In both cases, if the data values are equally spaced with the step size $h$, the truncation error
of the approximations are of the order $O(h)$

### Back to the model

Discretizing the equation 