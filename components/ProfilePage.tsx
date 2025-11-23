
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { CURRENCY_RATES } from '../constants';
import { Trophy, Award, Wallet, TrendingUp, Moon, MapPin, DollarSign, ArrowRightLeft, HandHeart } from 'lucide-react';

interface ProfilePageProps {
  profile: UserProfile;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => {
  const [currency, setCurrency] = useState<string>('USD');

  // Helper to format money based on selected currency
  const formatMoney = (usdAmount: number) => {
    const rate = CURRENCY_RATES[currency] || 1;
    const converted = usdAmount * rate;
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: (currency === 'BTC' || currency === 'ETH') ? 4 : 0,
      maximumFractionDigits: (currency === 'BTC' || currency === 'ETH') ? 6 : 0,
    });
    
    return formatter.format(converted);
  };

  const levelProgress = Math.min(100, (profile.totalPoints / profile.nextLevelPoints) * 100);

  return (
    <div className="h-full overflow-y-auto p-6 md:p-8 custom-scrollbar">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header & Main Stats */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={profile.avatarUrl} alt={profile.name} className="w-20 h-20 rounded-full border-2 border-gold shadow-lg shadow-gold/20" />
                <div>
                    <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <Award className="w-4 h-4 text-gold" />
                        <span className="text-gold font-semibold">{profile.level}</span>
                    </div>
                </div>
            </div>
            
            {/* Currency Selector */}
            <div className="flex items-center bg-primary-light p-2 rounded-lg border border-gray-700">
                <div className="mr-3 flex items-center gap-2 text-typography-grey text-sm">
                    <ArrowRightLeft className="w-4 h-4" /> Display Currency:
                </div>
                <div className="flex gap-1">
                    {Object.keys(CURRENCY_RATES).map(curr => (
                        <button 
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            className={`px-3 py-1 rounded text-xs font-bold transition-colors ${currency === curr ? 'bg-gold text-primary shadow' : 'text-gray-400 hover:bg-primary hover:text-white'}`}
                        >
                            {curr}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Points & Progress */}
            <div className="bg-primary-light p-6 rounded-xl border border-gray-800 shadow-lg col-span-1 md:col-span-2">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-typography-grey text-sm font-medium uppercase tracking-wider">Membership Level</h3>
                        <div className="text-3xl font-bold text-white mt-1">{profile.totalPoints.toLocaleString()} <span className="text-base text-gold">pts</span></div>
                    </div>
                    <Trophy className="w-8 h-8 text-gold opacity-50" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-typography-grey">
                        <span>Progress to Next Level</span>
                        <span>{profile.nextLevelPoints.toLocaleString()} pts needed</span>
                    </div>
                    <div className="h-3 w-full bg-primary rounded-full overflow-hidden relative shadow-inner">
                        <div 
                            className="h-full bg-gradient-to-r from-gold to-yellow-300 rounded-full transition-all duration-1000" 
                            style={{ width: `${levelProgress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

             {/* Investment Stats */}
             <div className="bg-primary-light p-6 rounded-xl border border-gray-800 shadow-lg">
                <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary rounded text-green-400">
                        <Wallet className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded font-mono">
                        +{profile.totalYearlyReturnPct}% APY
                    </div>
                </div>
                <h3 className="text-typography-grey text-sm font-medium mt-2">Total Invested</h3>
                <div className="text-2xl font-bold text-white">{formatMoney(profile.totalInvested)}</div>
                <div className="text-xs text-typography-grey mt-1">
                    Proj. Yearly Return: <span className="text-green-400">{formatMoney(profile.totalYearlyReturn)}</span>
                </div>
            </div>

            {/* Free Nights */}
            <div className="bg-primary-light p-6 rounded-xl border border-gray-800 shadow-lg relative overflow-hidden">
                 <div className="absolute right-0 top-0 p-6 opacity-10">
                    <Moon className="w-16 h-16 text-purple-400" />
                 </div>
                 <div className="relative z-10">
                    <div className="p-2 bg-primary rounded text-purple-400 w-fit mb-4">
                        <Moon className="w-5 h-5" />
                    </div>
                    <h3 className="text-typography-grey text-sm font-medium">Free Nights Remaining</h3>
                    <div className="text-3xl font-bold text-white">{profile.remainingFreeNights}</div>
                    <div className="text-xs text-purple-400 mt-1">Valid across network</div>
                 </div>
            </div>
        </div>

        {/* Investments List */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="text-gold w-5 h-5" /> Your Portfolio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.investments.map(inv => (
                    <div key={inv.id} className="bg-primary-light rounded-xl border border-gray-800 overflow-hidden hover:border-gold/40 transition-all group">
                        <div className="h-40 overflow-hidden relative">
                            <img src={inv.image} alt={inv.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {inv.country}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-1">{inv.name}</h3>
                            <div className="text-sm text-typography-grey mb-4 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {inv.location}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                                <div>
                                    <div className="text-[10px] uppercase text-typography-grey font-semibold">Investment</div>
                                    <div className="text-white font-bold">{formatMoney(inv.investmentSize)}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase text-typography-grey font-semibold">Yearly Return</div>
                                    <div className="text-green-400 font-bold flex items-center gap-1">
                                        {formatMoney(inv.yearlyReturnVal)}
                                        <span className="text-[10px] bg-green-400/10 px-1 rounded">
                                            {inv.yearlyReturnPct}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Add New Investment Placeholder */}
                <div className="bg-primary/30 rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center p-8 hover:border-gold/50 hover:bg-primary/50 transition-all cursor-pointer group min-h-[280px]">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-primary transition-colors">
                        <DollarSign className="w-6 h-6 text-typography-grey group-hover:text-primary" />
                    </div>
                    <h3 className="text-white font-bold">Make a New Investment</h3>
                    <p className="text-sm text-typography-grey text-center mt-2 max-w-[200px]">
                        Explore available cabins and grow your portfolio.
                    </p>
                </div>
            </div>
        </div>

        {/* Bottom Action */}
        <div className="flex justify-center pt-8 pb-4">
            <button className="flex items-center gap-2 bg-gold hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full shadow-lg shadow-gold/20 transition-transform transform hover:scale-105">
                <HandHeart className="w-5 h-5" /> Contribute for Additional Points
            </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
