/*
what is Xpath
==================
path of webelement from html/xml file

Types
===========
1.Absolute Xapth
--------------------
- Identify element from root node
-starts with '/'

/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input

2.Relative Xpath
----------------
- Identify element by its relative property
- startswith '//'

//*[@id="input-email"]
* any 

Syntax:
==========
//tagname[@attribute='value']

xpath with index
===================
Syntax:
===========
(xpath)[index number]

or
====
(xpath)[position=index]


xpath Methods
===================
1.text()
==============
Syntax:
---------------
//tagname[text()='visibile text']

2.normalize-space()
-----------------------
Syntax:
---------------
//tagname[normalize-space()='visibile text']

3.contains()
=====================
Syntax:
=========
//tagname[contains(@attribute,'partial value')]

OR

//tagname[contains(text(),'partial text')]



4.starts-with()
=====================
Syntax:
=========
//tagname[starts-with(@attribute,'prefix value')]

OR

//tagname[starts-with(text(),'prefix text')]

*/