import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import GithubIcon from "!svg-react-loader!../../images/svg-icons/github.svg?name=GithubIcon";
import FacebookIcon from "!svg-react-loader!../../images/svg-icons/facebook.svg?name=FacebookIcon";
import TwitterIcon from "!svg-react-loader!../../images/svg-icons/twitter.svg?name=TwitterIcon";
import SlackIcon from "!svg-react-loader!../../images/svg-icons/slack.svg?name=SlackIcon";
import GmailIcon from "!svg-react-loader!../../images/svg-icons/gmail.svg?name=GmailIcon";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    margin: "2em",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    twitter: TwitterIcon,
    facebook: FacebookIcon,
    github: GithubIcon,
    slack: SlackIcon,
    gmail: GmailIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
  <hr></hr>
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
