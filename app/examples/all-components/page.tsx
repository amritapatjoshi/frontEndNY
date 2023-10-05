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
import 'material-icons/iconfont/material-icons.scss';
import LottiePlayer from '@/shared/components/hs-LottiePlayer/HS-LottiePlayer';
import screensaverLottie from '@/public/lottie-files/Screensaver BG.json';
import MultiLinks from '@/shared/components/hs-three-links/HS-three-links';

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
                onClick={() => console.log("test button")}>
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
              Lottie component example
              <LottiePlayer
                // pass the required lottie file to animationData
                animationData={screensaverLottie}
              />

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

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All Material Icons css class examples</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.icons}>
              Filled Icon: <span className="material-icons">account_circle</span>
              Round Icon: <span className="material-icons-round">account_circle</span>
              Outlined Icon: <span className="material-icons-outlined">account_circle</span>
              Sharp Icon: <span className="material-icons-sharp">account_circle</span>
              Two-tone Icon: <span className="material-icons-two-tone">account_circle</span>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All icons in with *-round css class.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.icons}>
              <span className="material-icons">search</span>
              <span className="material-icons-round">accessibility_new</span>
              <span className="material-icons-round">language</span>
              <span className="material-icons-round">account_circle</span>
              <span className="material-icons-round">help</span>
              <span className="material-icons-round">volume_up</span>
              <span className="material-icons-round">volume_off</span>
              <span className="material-icons-round">volume_down</span>
              <span className="material-icons-round">close</span>
              <span className="material-icons-round">arrow_right_alt</span>
              <span className="material-icons-round">backspace</span>
              <span className="material-icons-round">credit_card</span>
              <span className="material-icons-round">payments</span>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Multi Links Component</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <h3>Multi Links Component with icons</h3>
            <MultiLinks
              displayIcons={true}
              clickEventOne={() => console.log("1st link clicked")}
              clickEventTwo={() => console.log("2nd link clicked")}
              clickEventThree={() => console.log("3rd link clicked")}
            />
            
            <h3>Multi Links Component without Icons</h3>
            <MultiLinks
              clickEventOne={() => console.log("1st link clicked")}
              clickEventTwo={() => console.log("2nd link clicked")}
              clickEventThree={() => console.log("3rd link clicked")}
            />
            
            <h3>Multi Links Component with Icons and overridden css</h3>
            <MultiLinks
              displayIcons={true}
              clickEventOne={() => console.log("1st link clicked")}
              clickEventTwo={() => console.log("2nd link clicked")}
              clickEventThree={() => console.log("3rd link clicked")}
              styles={{
                'fontSize': '3em',
                'color': 'pink'
              }}
            />

          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
