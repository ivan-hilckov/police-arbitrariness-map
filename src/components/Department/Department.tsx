import React, { useState } from 'react'
import { Classes, Dialog } from '@blueprintjs/core'
import { Layer, Feature } from 'react-mapbox-gl'

const layerPaint = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.2)',
  'fill-opacity': 0.75,
}
const layerPaintHover = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.8)',
  'fill-opacity': 0.75,
}

const Department: React.FC<{ coordinates: number[][][] | number[][][][] }> = ({ coordinates }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const onCloseClick = () => {
    setIsOpen(false)
  }

  const onFeatureClick = () => {
    setIsOpen(true)
  }

  const onLayerMouseEnter = ({ map }: any) => {
    map.getCanvas().style.cursor = 'pointer'
    setHover(true)
  }

  const onLayerMouseLive = ({ map }: any) => {
    map.getCanvas().style.cursor = ''
    setHover(false)
  }

  const dialogState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    usePortal: true,
  }

  return (
    <>
      <Layer type="fill" paint={hover ? layerPaintHover : layerPaint}>
        <Feature
          coordinates={coordinates}
          onClick={onFeatureClick}
          onMouseEnter={onLayerMouseEnter}
          onMouseLeave={onLayerMouseLive}
        />
      </Layer>
      <Dialog
        className={Classes.DARK}
        icon="info-sign"
        title="Palantir Foundry"
        isOpen={isOpen}
        onClose={onCloseClick}
        {...dialogState}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>
            <strong>
              Data integration is the seminal problem of the digital age. For over ten years, we’ve helped the world’s
              premier organizations rise to the challenge.
            </strong>
          </p>
          <p>
            Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and extending the
            power of data integration. With Foundry, anyone can source, fuse, and transform data into any shape they
            desire. Business analysts become data engineers — and leaders in their organization’s data revolution.
          </p>
          <p>
            Foundry’s back end includes a suite of best-in-class data integration capabilities: data provenance,
            git-style versioning semantics, granular access controls, branching, transformation authoring, and more. But
            these powers are not limited to the back-end IT shop.
          </p>
          <p>
            In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data integrations in
            their own right. Access controls, transformation logic, and data quality flow from original data source to
            intermediate analysis to presentation in real time. Every end product created in Foundry becomes a new data
            source that other users can build upon. And the enterprise data foundation goes where the business drives
            it.
          </p>
          <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
        </div>
      </Dialog>
    </>
  )
}

export default Department
