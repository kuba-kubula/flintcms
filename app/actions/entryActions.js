import Fetcher from '../utils/fetchClass';

export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const NEW_ENTRY = 'NEW_ENTRY';

export function newEntry(title, sectionId, rawOptions) {
  return (dispatch, getState) => {
    const { fields } = getState().fields;

    const options = Object.keys(rawOptions).map((key) => {
      const fieldId = fields.find(field => key === field.slug)._id;
      return {
        fieldId,
        fieldSlug: key,
        value: rawOptions[key],
      };
    });

    return fetch('/admin/api/entries', {
      method: 'POST',
      body: JSON.stringify({ title, sectionId, options }),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(res => res.json())
      .then(json => dispatch({ type: NEW_ENTRY, json }))
      .catch(err => new Error(err));
  };
}

export function fetchEntriesIfNeeded() {
  return (dispatch, getState) => {
    const fetcherOptions = {
      name: 'entries',
      request: REQUEST_ENTRIES,
      receive: RECEIVE_ENTRIES,
    };

    const fetcher = new Fetcher(fetcherOptions);
    return fetcher.beginFetch(dispatch, getState());
  };
}
