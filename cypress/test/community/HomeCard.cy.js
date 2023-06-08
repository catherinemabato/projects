import React from 'react';
import { mount } from '@cypress/react';
import HomeCards from '../../../components/community/HomeCard';

describe('HomeCards Component', () => {
  it('renders correctly', () => {
    const props = {
      headline: 'Heading Hero',
      title: 'Title',
      description: ' Description',
      btnText: 'Button',
      link: 'https://sample.com',
      className: 'sample-class',
    };

    mount(<HomeCards {...props} />);
    cy.get('[data-testid="hero"]').should('exist');
    cy.get('[data-testid="title"]').should('exist');
    cy.get('[data-testid="button"]').should('exist');
    cy.get(`[href="https://sample.com"]`).should('exist');
    cy.get('.sample-class').should('exist');
  });
});
