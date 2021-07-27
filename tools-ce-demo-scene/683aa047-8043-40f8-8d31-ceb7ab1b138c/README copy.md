Attention 

I apologize for the inconvienent but anyone that has forked this repo I had to rebase everything.  I moved what was master to master-original-backup.  Master has been rebased to match https://github.com/decentraland/smart-items.  You will have to rebase yourself to get inline with the changes

Why?

I realized I was going down a path for failure with how I had the repo modeled.  It was a hard fork of the main repo https://github.com/decentraland/smart-items (smart-items) which is a bad idea as changes wont flow through heasily.  By hard fork I mean having folders like toobox-ce instead of toolbox (like the main repo name).   History wont be maintained and it wont merge nicely in either direction.

Instead I changing the pattern to smart-items-ce will be a "feature branch repository" of smart-items.  I will rebase so that smart-items is the upstream repo and changes will flow through more easily. 


I created a workaround for to generate assets with "CE" vs non CE assets ID.  This is done so you can drag your custom item in and it wont conflict with the out of the box one.  Also let the CE version go ahead of the non CE version while keeping common history.  We keep ability to get updates from smart-items AND/OR merge our changes into smart-items much easier

I will continue to upload the build CE versions here for those who do not want to build the items themself.

For those who do want to build the items themself....

For now I created a script "dclpackce.sh".  What it does is it will back up asset.json, make inline change to the GUID and append "CE" to the end of the asset name.  It will then build the item pack and put back the original. 

