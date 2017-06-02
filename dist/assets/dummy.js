"use strict";



define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = _ember.default.Application;


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/editable-buttons/component', ['exports', 'ember-x-editable/components/editable-buttons/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/ember-x-editable/component', ['exports', 'ember-x-editable/components/ember-x-editable/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/error-message/component', ['exports', 'ember-x-editable/components/error-message/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/x-editable-select/component', ['exports', 'ember-x-editable/components/x-editable-select/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/x-editable-text/component', ['exports', 'ember-x-editable/components/x-editable-text/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember', 'dummy/utils/validators'], function (exports, _ember, _validators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var A = _ember.default.A,
      Controller = _ember.default.Controller,
      Logger = _ember.default.Logger;
  exports.default = Controller.extend({
    fontFamilyConfig: ['Lato'],
    selectContent: A([{ value: '1', text: 'TestString' }, { value: '2', text: 'LongerTestString' }, { value: '3', text: 'ReallyReallyLongTestString' }]),
    selectValidator: null,
    selectValue: '2',
    textValue: 'TestString',
    textValidator: _validators.default.RequiredString,
    actions: {
      cancelAction: function cancelAction() {
        Logger.log('cancel');
      },
      saveAction: function saveAction() {
        Logger.log('save');
      }
    }
  });
});
define('dummy/ember-x-editable/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-x-editable/components/editable-buttons/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/editable-buttons/component.js should pass ESLint\n\n');
  });

  QUnit.test('ember-x-editable/components/ember-x-editable/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/ember-x-editable/component.js should pass ESLint\n\n');
  });

  QUnit.test('ember-x-editable/components/error-message/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/error-message/component.js should pass ESLint\n\n');
  });

  QUnit.test('ember-x-editable/components/x-base/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/x-base/component.js should pass ESLint\n\n');
  });

  QUnit.test('ember-x-editable/components/x-editable-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/x-editable-select/component.js should pass ESLint\n\n');
  });

  QUnit.test('ember-x-editable/components/x-editable-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-x-editable/components/x-editable-text/component.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_and.andHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_equal.equalHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gt.gtHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gte.gteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_isArray.isArrayHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lt.ltHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lte.lteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_notEqual.notEqualHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_not.notHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_or.orHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_xor.xorHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember.default.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = _ember.default.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4aSKY5N3", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-12 text-center\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[13],[11,\"span\",[]],[15,\"class\",\"pacifico\"],[13],[0,\"ember\"],[14],[0,\" x-editable\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3\"],[13],[0,\"\\n    Ember-x-editable is an \\\"x-editable like\\\" Ember addon. It doesn not wrap the actual x-editable library,\\n    but was inspired by it. It provides much less functionality than the full x-editable. This was created because\\n    x-editable did not play nicely with Ember.\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-12 text-center\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[13],[0,\"Demo\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[13],[0,\"Text\"],[14],[0,\"\\n\"],[6,[\"ember-x-editable\"],null,[[\"cancelAction\",\"fontFamilyConfig\",\"isFieldEditing\",\"saveAction\",\"validator\",\"value\"],[\"cancelAction\",[28,[\"fontFamilyConfig\"]],[28,[\"isFieldEditing\"]],\"saveAction\",[28,[\"textValidator\"]],[28,[\"textValue\"]]]],{\"statements\":[[0,\"      \"],[1,[28,[\"x\",\"text\"]],false],[0,\"\\n\"]],\"locals\":[\"x\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[13],[0,\"Select\"],[14],[0,\"\\n\"],[6,[\"ember-x-editable\"],null,[[\"cancelAction\",\"changeAction\",\"content\",\"fontFamilyConfig\",\"isFieldEditing\",\"saveAction\",\"validator\",\"value\"],[\"cancelAction\",\"changeAction\",[28,[\"selectContent\"]],[28,[\"fontFamilyConfig\"]],[28,[\"isFieldEditing\"]],\"saveAction\",[28,[\"selectValidator\"]],[28,[\"selectValue\"]]]],{\"statements\":[[0,\"      \"],[1,[28,[\"x\",\"select\"]],false],[0,\"\\n\"]],\"locals\":[\"x\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/shipshapecode/ember-x-editable\"],[15,\"class\",\"col-sm-2 col-sm-offset-4 btn btn-default\"],[13],[0,\"Github\"],[14],[0,\"\\n  \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/shipshapecode/ember-x-editable/blob/master/README.md\"],[15,\"class\",\"col-sm-2 btn btn-default\"],[13],[0,\"Docs\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define('dummy/utils/validators', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Validators = {
    RequiredString: function RequiredString(value) {
      var text = new RegExp(/^[a-zA-Z][a-zA-Z '-]*$/i);
      if (!text.test(value)) {
        return 'Text may only contain \'A-Z\',\'a-z\', spaces, hyphens and apostrophes.';
      }
      return false;
    }
  };
  exports.default = Validators;
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
