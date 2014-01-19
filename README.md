meteor-injector
===============

Integration of InjectorJS library (https://github.com/alexpods/InjectorJS) into meteor.

InjectorJS version: 0.2.1

Following example will give you a common idea about the library. For more information about InjectorJS look at its github repository: https://github.com/alexpods/InjectorJS

```js
console.log(injector.has('name')); // false

injector.set('name', 'Bob');
injector.set('PI', 3.14).set('currentTime', new Date());

console.log(injector.has('name')); // true

console.log(injector.has('name')); // true
console.log(injector.get('name')); // 'Bob'
console.log(injector.get('PI'));   // 3.14



injector.set({
    auto_color: function() {
        return 'white';
    },
    auto_type: function() {
        return Math.random() < 0.5 ? 'hatchback' : 'sedan';
    },
    auto: function() {
        return {
            color: this.get('auto_color'),
            type:  this.get('auto_type')
        };
    }
});

var auto = injector.get('auto');

console.log(auto.color); // 'white'
console.log(auto.type);  // 'sedan' or 'hatchback'



injector.setFactory('x60', function(value) {
    return value*60;
});

injector.set('hours_in_minutes', 'x60', function() {
    return 5;
});

console.log(injector.get('hours_in_minutes')); // 300



injector.setFactory('join', {
    create: function(strings) {
        return strings.join(' ');
    }
});

injector.set('some_string', 'join', ['hello','world','!']);

console.log(injector.get('some_string')); // 'hello world !'



injector.set({
    service: {
        person: function() {
            return {
                class: this.get('person_class'),
                init:  [this.get('person_age')],
                call: {
                    setName: [this.get('person_name')]
                }
            }
        }
    },
    person_class: function() {
        
        var Person = function(age) {
            this.name = undefined;
            this.age  = age;
        };
        Person.prototype.setName = function(name) {
            this.name = name;
        }
        
        return Person;
    },
    person_age: 10,
    person_name: 'Bob'
});

var person = injector.get('person');

console.log(person.age);  // 10
console.log(person.name); // 'Bob'
```



[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/5e42ff4b241cacd2f0a85e5e49cdbead "githalytics.com")](http://githalytics.com/alexpods/meteor-injector)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/alexpods/meteor-injector/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

