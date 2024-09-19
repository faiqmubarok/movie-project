import '../../style/style.css';
const Notification = () => {
  return (
    <div className="absolute right-4 top-24 md:top-[90px] w-80 h-80 bg-black z-30 rounded-sm shadow-md overflow-hidden">
      <h4 className="text-sm font-medium w-full text-start p-4 border-b-2 border-secondary text-white">
        Notification
      </h4>
      <div className="overflow-y-auto max-h-full pb-14 no-scrollbar">
        <div className="text-sm text-white p-4 border-b border-secondary">
          <p className="font-semibold">New Message</p>
          <p className="text-xs text-third">2 minutes ago</p>
          <p className="mt-2 text-third">You have a new message from John.</p>
        </div>
        <div className="text-sm text-white p-4 border-b border-secondary">
          <p className="font-medium">Update Available</p>
          <p className="text-xs text-third">10 minutes ago</p>
          <p className="mt-2 text-third">Version 2.1.0 is now available for download.</p>
        </div>
        <div className="text-sm text-white p-4 border-b border-secondary">
          <p className="font-medium">System Alert</p>
          <p className="text-xs text-third">30 minutes ago</p>
          <p className="mt-2 text-third">Your system has successfully updated.</p>
        </div>
        <div className="text-sm text-white p-4 border-b border-secondary">
          <p className="font-medium">New Follower</p>
          <p className="text-xs text-third">1 hour ago</p>
          <p className="mt-2 text-third">Alex started following you.</p>
        </div>
        <div className="text-sm text-white p-4 border-b border-secondary">
          <p className="font-medium">Event Reminder</p>
          <p className="text-xs text-third">Yesterday</p>
          <p className="mt-2 text-third">
            Don&apos;t forget the team meeting at 10 AM tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
