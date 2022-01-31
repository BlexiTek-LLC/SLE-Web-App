import React from 'react';
import {signOut} from 'firebase/auth'
import { useRouter } from 'next/router';
import {auth} from '../Utils/Configs/firebase'


import styles from '../../styles/Admin/Dashboard.module.css'
import 'material-icons/iconfont/material-icons.css';

export default function SideBar() {
    const router = useRouter();

    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            router.push('/admins/adminAuth');
        })
    }
  return(
      <div className={styles.container}>
          <aside>
              <div className={styles.top}>
                <div className={styles.logo}>
                    <img src='/assets/admin/sleLogo.png' />
                    <h2>SLE <span className={styles.dange}>Portal</span></h2>
                </div>
                <div className={styles.close} id='close-btn'>
                <span class="material-icons-sharp">close</span>
                </div>
              </div>

              <div className={styles.sidebar}>
                    <a href='#' className={styles.active}>
                        <span className="material-icons-sharp">grid_view</span>
                        <h3>Dashboard</h3>
                    </a>

                    <a href='#'>
                    <span class="material-icons-sharp">people_alt</span>
                        <h3>Users</h3>
                    </a>

                    <a href='#'>
                        <span class="material-icons-sharp">query_stats</span>
                        <h3>Stats</h3>
                    </a>

                    <a href='#'>
                        <span class="material-icons-sharp">send</span>
                        <h3>Messages</h3>
                        <span className={styles.messageCount}>26</span>
                    </a>

                    <a href='#'>
                        <span class="material-icons-sharp">settings</span>
                        <h3>Settings</h3>
                    </a>

                    <a onClick={logOut} href='#'>
                        <span class="material-icons-sharp">logout</span>
                        <h3>Sign Out</h3>
                    </a>
              </div>
          </aside>

          <main>
              <h1 className={styles.header}>Dashboard</h1>
              <div className={styles.date}>
                    <input type='date' />
              </div>

              <div className={styles.insights}>
                    <div className={styles.funds}>
                        <span class="material-icons-sharp">attach_money</span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3>Total Funds Raised</h3>
                                <h1>$2m+</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg>
                                    <circle
                                    cx={38}
                                    cy={38}
                                    r={36}></circle>
                                </svg>

                                <div className={styles.number}>
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 hours
                        </small>
                    </div>

                    <div className={styles.users}>
                        <span class="material-icons-sharp">people_alt</span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3>Total Users Registered</h3>
                                <h1>50,576</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg>
                                    <circle
                                    cx={38}
                                    cy={38}
                                    r={36}></circle>
                                </svg>

                                <div className={styles.number}>
                                    <p>65%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 hours
                        </small>
                    </div>

                    <div className={styles.loans}>
                        <span class="material-icons-sharp">price_check</span>
                        <div className={styles.middle}>
                            <div className={styles.left}>
                                <h3>Total Loans Paid</h3>
                                <h1>25,576</h1>
                            </div>
                            <div className={styles.progress}>
                                <svg>
                                    <circle
                                    cx={38}
                                    cy={38}
                                    r={36}></circle>
                                </svg>

                                <div className={styles.number}>
                                    <p>45%</p>
                                </div>
                            </div>
                        </div>
                        <small className={styles.textMuted}>
                            Last 24 hours
                        </small>
                    </div>
              </div>

              <div className={styles.people}>
                    <h2>Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Pending</td>
                                <td>actions</td>
                                <td>Details</td>
                            </tr>

                            <tr>
                                <td>Sean Doe</td>
                                <td>Pending</td>
                                <td>actions</td>
                                <td>Details</td>
                            </tr>

                            <tr>
                                <td>Katie Doe</td>
                                <td>Pending</td>
                                <td>actions</td>
                                <td>Details</td>
                            </tr>

                            <tr>
                                <td>Nia Doe</td>
                                <td>Pending</td>
                                <td>actions</td>
                                <td>Details</td>
                            </tr>

                            <tr>
                                <td>James Doe</td>
                                <td>Pending</td>
                                <td>actions</td>
                                <td>Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href='#'>Show All</a>
              </div>
          </main>

          <div className={styles.right}>
                <div className={styles.top}>
                    <button id='menu-btn'>
                        <span className="material-icons-sharp">menu</span>
                    </button>
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <p>Hey, <b>John</b></p>
                            <small className={styles.textMuted}>Admin</small>
                        </div>
                        <div className={styles.profilePic}>
                            <img src='/assets/admin/sleLogo.png' />
                        </div>
                    </div>
                </div>

                <div className={styles.recentUpdates}>
                    <h2>Recent Updates</h2>
                    <div className={styles.updates}>
                        <div className={styles.update}>
                            <div className={styles.profilePic}>
                                <img src='/assets/admin/sleLogo.png' />
                            </div>
                            <div className={styles.message}>
                                <p><b>Samantha Doe</b> donated $2,568</p>
                                <small className={styles.textMuted}>2 minutes ago</small>
                            </div>
                        </div>

                        <div className={styles.update}>
                            <div className={styles.profilePic}>
                                <img src='/assets/admin/sleLogo.png' />
                            </div>
                            <div className={styles.message}>
                                <p><b>Lea Doe</b> joined SLE</p>
                                <small className={styles.textMuted}>25 minutes ago</small>
                            </div>
                        </div>

                        <div className={styles.update}>
                            <div className={styles.profilePic}>
                                <img src='/assets/admin/sleLogo.png' />
                            </div>
                            <div className={styles.message}>
                                <p><b>Bob Doe</b> paid his loan</p>
                                <small className={styles.textMuted}>3 hours ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.analytics}>
                    <h2> Analytics</h2>
                    <div className={styles.itemsOnline}>
                        <div className={styles.icon}>
                            <span class="material-icons-sharp">trending_up</span>
                        </div>
            
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3>Total Sign Ups</h3>
                                <small className={styles.textMuted}>Last 24 hours</small>
                            </div>
                            <h5 className={styles.success}>+45%</h5>
                            <h3>586</h3>
                        </div>
                    </div>

                    <div className={styles.itemsOffline}>
                        <div className={styles.icon}>
                            <span class="material-icons-sharp">trending_up</span>
                        </div>
            
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3>Total Loans Not Paid</h3>
                                <small className={styles.textMuted}>Last 24 hours</small>
                            </div>
                            <h5 className={styles.success}>+75%</h5>
                            <h3>358</h3>
                        </div>
                    </div>

                    <div className={styles.itemsOnline}>
                        <div className={styles.icon}>
                            <span class="material-icons-sharp">trending_up</span>
                        </div>
            
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3>Total Debts</h3>
                                <small className={styles.textMuted}>Last 24 hours</small>
                            </div>
                            <h5 className={styles.danger}>+89%</h5>
                            <h3>$1.2m+</h3>
                        </div>
                    </div>
                </div>
          </div>

      </div>
  )
}
