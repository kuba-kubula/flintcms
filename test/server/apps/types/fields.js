const mocks = require('../../../mocks');
const expect = require('chai').expect;
const common = require('../common');

it('returns a list of fields', (done) => {
  global.agent
    .post('/graphql')
    .send({
      query: `
      {
        fields {
          _id
          title
          options
          dateCreated
          handle
          slug
          required
          type
        }
      }`,
    })
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body).to.deep.equal({
        data: {
          fields: mocks.fields,
        },
      });
      return done();
    });
});

it('can query for a specific field', function (done) {
  global.agent
    .post('/graphql')
    .send({
      query: `
      query ($_id: ID!) {
        field (_id: $_id) {
          _id
        }
      }`,
      variables: { _id: mocks.fields[0]._id },
    })
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body).to.deep.equal({
        data: {
          field: { _id: mocks.fields[0]._id },
        },
      });
      return done();
    });
});


it('can update a field in the database', function (done) {
  global.agent
    .post('/graphql')
    .send({
      query: `
      mutation ($_id: ID!, $data: FieldInput!) {
        updateField (_id: $_id, data: $data) {
          title
        }
      }`,
      variables: {
        _id: mocks.fields[0]._id,
        data: {
          title: 'New title!',
          required: false,
          type: 'Text',
          options: {
            placeholder: 'Example!',
          },
        },
      },
    })
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body).to.deep.equal({
        data: {
          updateField: {
            title: 'New title!',
          },
        },
      });
      return done();
    });
});

it('can delete a field from the database', function (done) {
  global.agent
    .post('/graphql')
    .send({
      query: `
      mutation ($_id: ID!) {
        removeField (_id: $_id) {
          _id
        }
      }`,
      variables: { _id: mocks.fields[0]._id },
    })
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body).to.deep.equal({
        data: {
          removeField: { _id: mocks.fields[0]._id },
        },
      });
      return done();
    });
});

it('can save a field to the database', function (done) {
  global.agent
    .post('/graphql')
    .send({
      query: `
      mutation ($data: FieldInput!) {
        addField (data: $data) {
          title
          handle
          slug
          required
          options
          type
        }
      }`,
      variables: {
        data: {
          title: mocks.fields[0].title,
          required: mocks.fields[0].required,
          options: mocks.fields[0].options,
          type: mocks.fields[0].type,
        },
      },
    })
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body).to.deep.equal({
        data: {
          addField: {
            title: mocks.fields[0].title,
            slug: mocks.fields[0].slug,
            handle: mocks.fields[0].handle,
            required: mocks.fields[0].required,
            options: mocks.fields[0].options,
            type: mocks.fields[0].type,
          },
        },
      });
      return done();
    });
});


describe('Permissions', function () {
  before('Set to non-admin', common.setNonAdmin);

  it('cannot delete a field from the database', function (done) {
    global.agent
      .post('/graphql')
      .send({
        query: `
        mutation ($_id: ID!) {
          removeField (_id: $_id) {
            _id
          }
        }`,
        variables: { _id: mocks.fields[0]._id },
      })
      .end((err, res) => {
        if (err) { return done(err); }
        expect(res.body.errors[0]).to.include({
          message: 'You do not have permission to delete Fields.',
        });
        return done();
      });
  });

  it('cannot save a field to the database', function (done) {
    global.agent
      .post('/graphql')
      .send({
        query: `
        mutation ($data: FieldInput!) {
          addField (data: $data) {
            title
          }
        }`,
        variables: {
          data: {
            title: 'Some text',
            required: false,
            type: 'Text',
            options: {
              placeholder: 'Text!',
            },
          },
        },
      })
      .end((err, res) => {
        if (err) { return done(err); }
        expect(res.body.errors[0]).to.include({
          message: 'You do not have permission to create a new Field.',
        });
        return done();
      });
  });

  after('Set to admin', common.setAdmin);
});