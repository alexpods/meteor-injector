Package.describe({
    summary: "Integration of InjectorJS library (https://github.com/alexpods/InjectorJS) into meteor"
});

Package.on_use(function(api) {
    api.use('clazz', ['client', 'server']);

    api.add_files('lib/InjectorJS.min.js', ['server', 'client']);
    api.add_files('lib/globals.js');

    api.export('injector', ['server', 'client']);
});
