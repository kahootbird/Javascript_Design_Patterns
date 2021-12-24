var revealingModule = (function () {
    var privateVar = "Ben Thomas";
    function setNameFn( strName ) {
        privateVar = strName;
    }
    function getNameFn (getName)
    {
	return(privateVar)
    }
return {
        setName: setNameFn,
	getName: getNameFn,
    };
})();
revealingModule.setName( "Paul Adams" );
console.log(revealingModule.getName())
