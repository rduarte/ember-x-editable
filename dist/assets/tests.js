'use strict';

define('dummy/tests/acceptance/ember-x-editable-test', ['jquery', 'qunit', 'dummy/tests/helpers/module-for-acceptance'], function (_jquery, _qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | ember-x-editable');

  (0, _qunit.test)('text is initially TestString', function (assert) {
    assert.expect(2);
    visit('/');
    andThen(function () {
      assert.equal(find('.ember-x-editable-text', 'html').hasClass('is-not-editing'), true, 'is-not-editing class initially');
      assert.equal(find('.ember-x-editable-text', 'html').val(), 'TestString', 'text is initially TestString');
    });
  });

  (0, _qunit.test)('is-editing class applied', function (assert) {
    assert.expect(1);
    visit('/');
    click('.ember-x-editable-text');
    andThen(function () {
      assert.equal(find('.ember-x-editable-text', 'html').hasClass('is-editing'), true, 'is-editing class after clicking');
    });
  });

  (0, _qunit.test)('text is saved', function (assert) {
    assert.expect(1);
    visit('/');
    andThen(function () {
      click('.ember-x-editable-text');
      andThen(function () {
        fillIn('.ember-x-editable-text', 'New test string');
      });
      andThen(function () {
        (0, _jquery.default)('.editable-buttons .editable-submit').click();
      });
      andThen(function () {
        assert.equal(find('.ember-x-editable-text', 'html').val(), 'New test string', 'text is saved');
      });
    });
  });

  (0, _qunit.test)('text is cancelled, cancel button', function (assert) {
    assert.expect(1);
    visit('/');
    andThen(function () {
      click('.ember-x-editable-text');
      andThen(function () {
        fillIn('.ember-x-editable-text', 'Cancelled text');
      });
      andThen(function () {
        (0, _jquery.default)('.editable-buttons .editable-cancel').click();
      });
      andThen(function () {
        assert.equal(find('.ember-x-editable-text', 'html').val(), 'TestString', 'text cancelled');
      });
    });
  });

  (0, _qunit.test)('text is cancelled, focusOut', function (assert) {
    assert.expect(1);
    visit('/');
    andThen(function () {
      click('.ember-x-editable-text');
      andThen(function () {
        fillIn('.ember-x-editable-text', 'Cancelled text');
      });
      andThen(function () {
        (0, _jquery.default)('.ember-x-editable-text').focusout();
      });
      andThen(function () {
        assert.equal(find('.ember-x-editable-text', 'html').val(), 'TestString', 'text cancelled');
      });
    });
  });

  (0, _qunit.test)('x-select save change', function (assert) {
    assert.expect(1);
    visit('/');
    andThen(function () {
      click('.ember-x-editable-select');
      andThen(function () {
        (0, _jquery.default)('.ember-x-editable-select option:nth-child(3)').prop('selected', true).trigger('change');
      });
      andThen(function () {
        (0, _jquery.default)('.editable-buttons .editable-save').click();
      });
      andThen(function () {
        assert.equal(find('.ember-x-editable-select option:selected', 'html').text(), 'ReallyReallyLongTestString', 'selection saved');
      });
    });
  });

  (0, _qunit.test)('x-select cancel change', function (assert) {
    assert.expect(1);
    visit('/');
    andThen(function () {
      click('.ember-x-editable-select');
      andThen(function () {
        (0, _jquery.default)('.ember-x-editable-select option:nth-child(1)').prop('selected', true).trigger('change');
      });
      andThen(function () {
        (0, _jquery.default)('.editable-buttons .editable-cancel').click();
      });
      andThen(function () {
        assert.equal(find('.ember-x-editable-select option:selected', 'html').text(), 'LongerTestString', 'selection cancelled');
      });
    });
  });
});
define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('utils/validators.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/validators.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = _ember.default.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = _ember.default.merge,
      run = _ember.default.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/ember-x-editable-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('ember-x-editable', 'Integration | Component | ember x editable', {
    integration: true
  });

  (0, _emberQunit.test)('mouseEnter/mouseLeave', function (assert) {
    this.set('mouseInsideComponent', false);
    this.render(Ember.HTMLBars.template({
      "id": "PLgrr0No",
      "block": "{\"statements\":[[1,[33,[\"x-editable-text\"],null,[[\"mouseInsideComponent\",\"validator\",\"value\"],[[28,[\"mouseInsideComponent\"]],[28,[\"validator\"]],[28,[\"value\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    this.$('div').first().mouseenter();
    assert.equal(this.get('mouseInsideComponent'), true);
    this.$('div').first().mouseleave();
    assert.equal(this.get('mouseInsideComponent'), false);
  });

  (0, _emberQunit.test)('Empty value', function (assert) {
    this.set('value', 'Empty');
    this.render(Ember.HTMLBars.template({
      "id": "wBji0fSM",
      "block": "{\"statements\":[[1,[33,[\"x-editable-text\"],null,[[\"validator\",\"value\"],[[28,[\"validator\"]],[28,[\"value\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    this.$('div').first().focusin();
    assert.equal(this.get('value'), '');
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/ember-x-editable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/ember-x-editable-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ember-x-editable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ember-x-editable-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/components/x-editable-text-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/x-editable-text-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/components/x-editable-text-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('component:x-editable-text', 'Unit | x editable text', {
    unit: true
  });

  (0, _emberQunit.test)('should set isValid based on errorMessage', function (assert) {
    assert.expect(2);
    var xText = this.subject();
    xText.set('errorMessage', 'Error!!');
    assert.equal(xText.get('isValid'), false);
    xText.set('errorMessage', null);
    assert.equal(xText.get('isValid'), true);
  });

  (0, _emberQunit.test)('isEmpty: not empty', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', 'Hello world');
    assert.equal(xText.get('isEmpty'), false);
  });

  (0, _emberQunit.test)('isEmpty: \'\'', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', '');
    assert.equal(xText.get('isEmpty'), true);
  });

  (0, _emberQunit.test)('isEmpty: Empty', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', 'Empty');
    assert.equal(xText.get('isEmpty'), true);
  });

  (0, _emberQunit.test)('isEmpty: null', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', null);
    assert.equal(xText.get('isEmpty'), true);
  });

  (0, _emberQunit.test)('handleEmptyValue: null', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', null);
    xText.handleEmptyValue();
    assert.equal(xText.get('value'), 'Empty');
  });

  (0, _emberQunit.test)('handleEmptyValue: \'\'', function (assert) {
    assert.expect(1);
    var xText = this.subject();
    xText.set('value', '');
    xText.handleEmptyValue();
    assert.equal(xText.get('value'), 'Empty');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
