#!/bin/sh

# Check if there is a node_modules folder already; this allows the developer to
# easily swap to and from docker volume if they're working on their local npm
# without risking any overrides or mismatches upon transitioning.
if test -d node_modules; 
then
	echo "node_modules exists as volume or otherwise, skipping install" ;
	echo "delete node_modules for new modules in package" ;
else
	npm install
fi

if [ $TEST -eq 1 ];
then
	npm test 
	exit $?
fi

if [ $DEVELOPMENT_MODE -eq 1 ];
then
	npm run development
else
	npm run build
	npm run deploy
fi