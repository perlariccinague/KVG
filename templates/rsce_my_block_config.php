<?php
return array(
    'label' => array('Block', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'image' => array(
            'label' => array('Bild', 'Beschreibung...'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),
        'titel' => array(
            'label' => array('Überschrift', 'Beschreibung...'),
            'inputType' => 'text',
        ),

        'description' => array(
            'label' => array('Text', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'link' => array(
            'label' => array('Link', 'Auf welche Seite soll diese Box verlinken?'),
            'inputType' => 'pageTree'
        ),
    )
);
