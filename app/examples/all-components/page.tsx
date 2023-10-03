"use client"

import { Metadata } from 'next'
import styles from './styles.module.scss'
import React from 'react';
import HSButton from '@/shared/components/hs-button/HS-Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import HSDangerousComponent from '@/shared/components/hs-DangerousComponent/HS-DangerousComponent';
 
export const metadata: Metadata = {
  title: 'SCO - Components',
}

export default function AllComponents() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.atoms}>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Button</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <HSButton variant='contained' color='primary'
                onClick={() => console.log('test button')}>
                Click!
              </HSButton>

              <HSButton variant='outlined' startIcon={<DeleteIcon />}>
                Click!
              </HSButton>

            </Typography>
          </AccordionDetails>

        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Lottie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lottie component usage example
            </Typography>
          </AccordionDetails>
        </Accordion>
                
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Dangerous Component</Typography>
          </AccordionSummary>
          <AccordionDetails>           
              <HSDangerousComponent data='DANGEROUS COMPONENT' />           
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>SCSS Variable Usage</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <div className={styles.test}>
                <p className={styles.primary18WNormalBlack2}>
                  This is a sample test to test the scss variables and mixins.
                </p>
                <p className={styles.secondary28W600White3}>
                  This is a sample test to test the scss variables and mixins.
                </p>
                <p className={styles.primary32W600Orange1}>
                  This is a sample test to test the scss variables and mixins.
                </p>
                <p className={styles.mixinExample}>
                  This is a sample test to test the scss variables and mixins.
                </p>
              </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
}