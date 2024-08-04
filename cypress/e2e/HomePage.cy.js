/// <reference types="cypress" />

context('Search Properties', () => {
   
      describe('Search properties', () => {
        beforeEach(()=>{
          cy.visit(Cypress.config('baseUrl'));
        })
        
        it('verify search results', () => {
      
         cy.get('[id="MidlandHeartWeb_Theme_wt209_block_OutSystemsUIWeb_wt2_block_wtContent_wtMainContent_OutSystemsUIWeb_wt83_block_wtContent_OutSystemsUIWeb_wt174_block_wtInput"]').find('input').type('B1{enter}',{force:true}); // search for 'B1'
        cy.get('[id="MidlandHeartWeb_Theme_wt241_block_OutSystemsUIWeb_wt2_block_wtContent_wtSubHeader_OutSystemsUIWeb_wt80_block_wtColumn2_WebPatterns_wt369_block_wtCell1"]').click(); // Clicks the filter
         cy.get('[id="MidlandHeartWeb_Theme_wt241_block_OutSystemsUIWeb_wt2_block_wtContent_wtFooter_OutSystemsUIWeb_wtMobileFiltersSidebar_block_wtContent_OutSystemsUIWeb_wt213_block_wtButtonDropdownWrapper"]').click(); // clicks distance dropdown
          cy.get('[class="margin-left-s text-neutral-10"]').eq(3).click({force:true}); //Clicks 10 miles
        cy.get('[id="MidlandHeartWeb_Theme_wt241_block_OutSystemsUIWeb_wt2_block_wtContent_wtFooter_OutSystemsUIWeb_wtMobileFiltersSidebar_block_wtContent_OutSystemsUIWeb_wt12_block_wtPrompt"]').click(); //clicks Max beds dropdown

        cy.get('[class="text-align-left text-neutral-10"]').eq(12).click({force:true}); //clicks number of beds
        cy.get('[id="MidlandHeartWeb_Theme_wt241_block_OutSystemsUIWeb_wt2_block_wtContent_wtSubHeader_OutSystemsUIWeb_wt64_block_wtContent_OutSystemsUIWeb_wt29_block_wtColumn2_wtListPropertyTypesFilter_ctl02_OutSystemsUIWeb_wt170_block_wtContent_wt36"]').click(); // Select Flat property type
        cy.get('[class="noUi-handle noUi-handle-upper"]')
        .invoke('attr', 'aria-valuetext', '200')
        .should('have.attr', 'aria-valuetext', '200') // Sets the price range to 200
        cy.get('[id="MidlandHeartWeb_Theme_wt241_block_OutSystemsUIWeb_wt2_block_wtContent_wtFooter_OutSystemsUIWeb_wtMobileFiltersSidebar_block_wtContent_OutSystemsUIWeb_wt193_block_wtColumn2_wt353"]').click(); // Clicks Apply Filters
       cy.contains('properties found').should('exist'); // properties found

        })
        })
    
        })
    