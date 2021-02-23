import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory/directorySelector';
import MenuItem from './MenuItem';

function DirectoryMenu({ sections }) {
    return (
        <div className="directory-menu">
            {sections.map((section) => (
                <MenuItem key={section.id} {...section} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
