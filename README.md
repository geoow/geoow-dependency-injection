# Geoow dependency injection

Dependency injection with `use` and `define`

## Install
```
npm install geoow-dependency-injection
```

## How to use
Define a class:
```
define('ClassName', () =>
{
    return {
        methodName
    };
});
```

Use the class:
```
const className = use('className');

className.methodName();
```

## License
GPL-3.0