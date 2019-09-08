---
date: "2019-09-08"
title: "Cross-platform conda env yml"
---
I use Linux, OSX and Windows on a daily basis, changing between OSes depending on the task at hand.
Some tools are more convenient in an OS than others but sometimes I just have to move from my MBP to my desktop (Linux/Windows),
this time around the task is plotting. After some time struggling with the [SigmaPlot](https://systatsoftware.com/products/sigmaplot/)'s GUI,
I decided to stick with what I know and use [Matplotlib](https://matplotlib.org/).

I use [Anaconda](https://www.anaconda.com/) for environment management as it is versatile and simple to use,
when you're only on one OS that is. Sharing its YAML config file between OSes can be a hassle, since some OS will
have a certain dependency which another OS will not. Searching around I found [conda-devenv](https://github.com/ESSS/conda-devenv)

[RTFM](https://buildmedia.readthedocs.org/media/pdf/conda-devenv/latest/conda-devenv.pdf)

I'll keep it short and just make note of the workflow I did to generate a YAML that I could use in OSX and Windows:
* Generate a YML with conda on OSX  
`conda env export --no-builds > environment.yml`  
* Create a new conda environment on Win  
`conda env create -n my_env -f environment.yml`  
* **Fail** to create a new environment due to OS dependencies
* Create an `environment.devenv.yml` with some added platform specific dependency requirements on OSX
```
dependencies:
  - appnope=0.1.0 # [osx]
  - ipython-7.8.0
  - ...
```
* Install and run `conda-devenv` on OSX or Win
* Navigate to the config file and run `conda-devenv` on OSX or Win  
`conda devenv -f environment.yml`
* Run `conda-devenv` to create environment  
`conda devnev`
* Activate newly created environment  
`conda activate my_env`

At this point the environment will be usable on your machine.  
Note: I manually went into the "original" YAML file and added OS specifics, if I find a better way, I'll document it here 