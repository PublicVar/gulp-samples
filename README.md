# Gulp samples files

Some gulp configurations for different projects.

There is one configuration by branch.

Branch description :
* **master** : Drupal.
  SaSS, livereload on twig
* **drupal-8** : SaSS, livereload on twig

## How it works

clone the only branch needed
```
git clone -b <branch> https://github.com/PublicVar/gulp-samples.git
```
move the files at the root of your working directory
```
mv gulp-samples/* ../your-working-directory/
```
delete this cloned
```
rm -rf gulp-samples
```

Install the modules
```
npm install
```
