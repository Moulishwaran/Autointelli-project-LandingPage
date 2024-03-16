import React from "react";
import "./mainSub.css";

const MainSub = () => {
  return (
    <div className="MainSub">
      <h1 className="MainSub-MainTitle">Why Autointelli?</h1>
      <div className="line"></div>
      <div className="content">
        <h1 className="MainSub-RealTitle">
          Real, actionable insights into your stack
        </h1>
        <p className="MainSub-Correlate">
          Correlate issues across your stack. Debug and collaborate from your
          <br />
          IDE. AI assistance at every step. All in one connected experience -
          not <br /> a maze of charts
        </p>
      </div>
      <div className="lines"></div>

      <div className="MainSub-content1">
        <h1 className="MainSub-RealTitle1">
          Dashboards, alerts, and integrations all in one place
        </h1>
        <p className="MainSub-Correlate1">
          Our Instant Observability quickstarts bundle everything you need to
          <br />
          start monitoring like a pro right out of the box. <br />
        </p>
      </div>

      <div className="orangeLine"></div>
      <div className="MainSub-contents">
        <h1 className="MainSub-RealTitles">
          Troubleshoot infrastructure before. Not after.
        </h1>
        <p className="MainSub-Correlates">
          Find root cause faster. Correlate infrastructure health with
          <br />
          performance and customer impact on one platform.
          <br />
        </p>
      </div>
      <div className="orangeLines"></div>

      <div className="MainSub-contents2">
        <h1 className="MainSub-RealTitles2">
          Troubleshoot infrastructure before. Not after.
        </h1>
        <p className="MainSub-Correlates2">
          Integrate easily with leading cloud providers. New Relic is committed
          <br />
          to open standards, open instrumentation, and the open communities
          <br />
        </p>
      </div>
    </div>
  );
};

export default MainSub;
