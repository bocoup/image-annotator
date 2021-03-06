import errors from '../errors';

// Import action labels & action creators for use in specs
import * as actions from '../../actions';

const unrelatedError = {
  error: new Error('Unrelated to API interaction!'),
};

describe('errors reducer', () => {

  it('is a function', () => {
    expect(errors).toBeDefined();
    expect(errors).toBeInstanceOf(Function);
  });

  it('initializes a default state object', () => {
    const initialState = errors(undefined, {});
    expect(initialState).toEqual([]);
  });

  it('does not mutate state when receiving an irrelevant action', () => {
    const initialState = errors(undefined, {});
    const nextState = errors(initialState, {});
    expect(nextState).toBe(initialState);
  });

  describe('attributes API', () => {
    const {
      REQUEST_ATTRIBUTES,
      RECEIVE_ATTRIBUTES,
      REQUEST_ATTRIBUTES_FAILED,
    } = actions;

    describe(`on ${REQUEST_ATTRIBUTES_FAILED}`, () => {

      it(`stores a ${REQUEST_ATTRIBUTES_FAILED} error`, () => {
        const error = new Error('something went wrong');
        const retryAction = { type: REQUEST_ATTRIBUTES };
        const initialState = [];
        const nextState = errors(initialState, {
          type: REQUEST_ATTRIBUTES_FAILED,
          payload: {
            error,
            retryAction,
          },
          error: true,
        });
        expect(nextState).toEqual([{
          type: REQUEST_ATTRIBUTES_FAILED,
          error,
          retryAction,
        }]);
      });

    });

    describe(`on ${REQUEST_ATTRIBUTES}`, () => {

      it(`removes any existing ${REQUEST_ATTRIBUTES_FAILED} error`, () => {
        const initialState = [
          {
            type: REQUEST_ATTRIBUTES_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: REQUEST_ATTRIBUTES },
          },
          unrelatedError,
        ];
        const nextState = errors(initialState, {
          type: REQUEST_ATTRIBUTES,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

    });

    describe(`on ${RECEIVE_ATTRIBUTES}`, () => {

      it(`removes any existing ${REQUEST_ATTRIBUTES_FAILED} error`, () => {
        const initialState = [
          {
            type: REQUEST_ATTRIBUTES_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: REQUEST_ATTRIBUTES },
          },
          unrelatedError,
        ];
        const nextState = errors(initialState, {
          type: RECEIVE_ATTRIBUTES,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

    });

  });

  describe('workload API', () => {
    const {
      REQUEST_WORKLOAD,
      RECEIVE_WORKLOAD,
      REQUEST_WORKLOAD_FAILED,
      COMPLETE_WORKLOAD,
      COMPLETE_WORKLOAD_FAILED,
    } = actions;

    describe(`on ${REQUEST_WORKLOAD_FAILED}`, () => {

      it(`stores a ${REQUEST_WORKLOAD_FAILED} error`, () => {
        const error = new Error('something went wrong');
        const retryAction = { type: REQUEST_WORKLOAD };
        const initialState = [];
        const nextState = errors(initialState, {
          type: REQUEST_WORKLOAD_FAILED,
          payload: {
            error,
            retryAction,
          },
          error: true,
        });
        expect(nextState).toEqual([{
          type: REQUEST_WORKLOAD_FAILED,
          error,
          retryAction,
        }]);
      });

    });

    describe(`on ${REQUEST_WORKLOAD}`, () => {

      it(`removes any existing ${REQUEST_WORKLOAD_FAILED} error`, () => {
        const initialState = [
          {
            type: REQUEST_WORKLOAD_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: REQUEST_WORKLOAD },
          },
          unrelatedError,
        ];
        const nextState = errors(initialState, {
          type: REQUEST_WORKLOAD,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

    });

    describe(`on ${COMPLETE_WORKLOAD_FAILED}`, () => {

      it(`stores a ${COMPLETE_WORKLOAD_FAILED} error`, () => {
        const error = new Error('something went wrong');
        const retryAction = { type: COMPLETE_WORKLOAD };
        const initialState = [];
        const nextState = errors(initialState, {
          type: COMPLETE_WORKLOAD_FAILED,
          payload: {
            error,
            retryAction,
          },
          error: true,
        });
        expect(nextState).toEqual([{
          type: COMPLETE_WORKLOAD_FAILED,
          error,
          retryAction,
        }]);
      });

    });

    describe(`on ${COMPLETE_WORKLOAD}`, () => {

      it(`removes any existing ${COMPLETE_WORKLOAD_FAILED} error`, () => {
        const initialState = [
          unrelatedError,
          {
            type: COMPLETE_WORKLOAD_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: COMPLETE_WORKLOAD },
          },
        ];
        const nextState = errors(initialState, {
          type: COMPLETE_WORKLOAD,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

    });

    describe(`on ${RECEIVE_WORKLOAD}`, () => {

      it(`removes any existing ${REQUEST_WORKLOAD_FAILED} error`, () => {
        const initialState = [
          {
            type: REQUEST_WORKLOAD_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: REQUEST_WORKLOAD },
          },
          unrelatedError,
        ];
        const nextState = errors(initialState, {
          type: RECEIVE_WORKLOAD,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

      it(`removes any existing ${COMPLETE_WORKLOAD_FAILED} error`, () => {
        const initialState = [
          {
            type: COMPLETE_WORKLOAD_FAILED,
            error: new Error('something went wrong'),
            retryAction: { type: COMPLETE_WORKLOAD },
          },
          unrelatedError,
        ];
        const nextState = errors(initialState, {
          type: RECEIVE_WORKLOAD,
        });
        expect(nextState).toEqual([unrelatedError]);
      });

    });

  });

});
