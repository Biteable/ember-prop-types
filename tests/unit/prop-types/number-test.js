/**
 * Unit test for the PropTypes.number validator
 */
import Ember from 'ember'
const {Logger} = Ember
import {afterEach, beforeEach, describe} from 'mocha'
import sinon from 'sinon'

import {itValidatesTheProperty, spyOnValidateMethods} from 'dummy/tests/helpers/validator'
import PropTypesMixin, {PropTypes} from 'ember-prop-types/mixins/prop-types'

const requiredDef = {
  required: true,
  type: 'number'
}

const notRequiredDef = {
  isRequired: requiredDef,
  required: false,
  type: 'number'
}

describe('Unit / validator / PropTypes.number', function () {
  const ctx = {propertyName: 'bar'}
  let sandbox, Foo

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    spyOnValidateMethods(sandbox)
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('when required', function () {
    beforeEach(function () {
      ctx.def = requiredDef
      Foo = Ember.Object.extend(PropTypesMixin, {
        propTypes: {
          bar: PropTypes.number.isRequired
        }
      })
    })

    describe('when initialized with number value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 1})
      })

      itValidatesTheProperty(ctx)

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })

    describe('when initialized with string value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 'baz'})
      })

      itValidatesTheProperty(ctx, 'Expected property bar to be a number')

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })

    describe('when initialized without value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create()
      })

      itValidatesTheProperty(ctx, 'Missing required property bar')

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })
  })

  describe('when not required', function () {
    beforeEach(function () {
      ctx.def = notRequiredDef
      Foo = Ember.Object.extend(PropTypesMixin, {
        propTypes: {
          bar: PropTypes.number
        }
      })
    })

    describe('when initialized with number value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 1})
      })

      itValidatesTheProperty(ctx)

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })

    describe('when initialized with string value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 'baz'})
      })

      itValidatesTheProperty(ctx, 'Expected property bar to be a number')

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })

    describe('when initialized without value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create()
      })

      itValidatesTheProperty(ctx)

      describe('when updated with array value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          Logger.warn.reset()
          ctx.instance.set('bar', 'spam')
        })

        itValidatesTheProperty(ctx, 'Expected property bar to be a number')
      })
    })
  })
})
