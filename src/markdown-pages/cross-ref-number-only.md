---
date: "2019-12-16"
title: "[Notes] Formatting cross-reference figures in Word"
---
[Source: Combine Cross-references](http://wordfaqs.ssbarnhill.com/CombineXrefs.htm)  
[Source: Formatting Cross-refrences](http://wordfaqs.ssbarnhill.com/FormatCrossReferences.htm)

When working with cross-references, you might need different formats.
I was looking for only number, what that means is that I wanted the text to
be something like "... is shown in Fig. 1 ..." but Word's MacOS 
cross-reference has some limitations in its UI, it doesn't have a 
"only number" option under "Insert reference to:", so I went online looking 
for a solution and to my surprise, Word has a very handy key combination 
"Alt + F9"

### F9
Updates or calculates selected field

### Alt + F9
Toggle all fields in the document


## The fix

Once you see the field text, you can add `\# 0` to the field:
```
{ REF _Ref121212121 \# 0}
```
This will display only numbers instead of label AND number

Also, add `\* Charformat` so stays in the same format as the text 
surrounding it.

## Before
```
"... is shown in Fig. FIGURE 1 ..."
```

## After
```
"... is shown in Fig. 1 ..."
```